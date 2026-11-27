const mongoose = require("mongoose");
const crypto = require("crypto");

const tripModel = require("../models/trip");
const bookingModel = require("../models/booking");
const statuscode = require("../utils/statuscode");

const bookingController = {
  async createBooking(req, res) {
    const session = await mongoose.startSession();

    try {
      const userId = req.user.id;
      const tripId = req.params.id;
      const { seats, passengers } = req.body;

      // 1. Only customers can book
      if (req.user.role !== "user") {
        return res.status(statuscode.FORBIDDEN).json({
          success: false,
          message: "Only customers can book seats",
        });
      }

      // 2. Validate request body
      if (
        !mongoose.isValidObjectId(tripId) ||
        !Array.isArray(seats) ||
        seats.length === 0 ||
        !Array.isArray(passengers) ||
        passengers.length === 0
      ) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "Invalid booking details",
        });
      }

      // 3. Validate seat numbers
      const selectedSeats = seats.map(Number);

      if (
        selectedSeats.some((seat) => !Number.isInteger(seat) || seat < 1) ||
        new Set(selectedSeats).size !== selectedSeats.length
      ) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "Invalid or duplicate seat numbers",
        });
      }

      // 4. Validate passenger count and seat assignments
      if (passengers.length !== selectedSeats.length) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "Passenger count must match selected seats",
        });
      }

      const passengerSeats = passengers.map((passenger) =>
        Number(passenger.seatNumber),
      );

      if (
        passengerSeats.some((seat) => !Number.isInteger(seat)) ||
        new Set(passengerSeats).size !== passengerSeats.length ||
        !selectedSeats.every((seat) => passengerSeats.includes(seat))
      ) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "Each passenger must have a unique selected seat",
        });
      }

      let createdBooking;

      // 5. Start MongoDB transaction
      await session.withTransaction(async () => {
        const currentTime = new Date();

        // Find the trip
        const trip = await tripModel
          .findOne({
            _id: tripId,
            isDeleted: false,
            isActive: true,
          })
          .session(session);

        if (!trip) {
          const error = new Error("Trip not found");
          error.statusCode = statuscode.NOT_FOUND;
          throw error;
        }

        // 6. Check whether every seat belongs to this customer
        for (const seatNumber of selectedSeats) {
          const seat = trip.seats.find(
            (item) => item.seatNumber === seatNumber,
          );

          if (
            !seat ||
            seat.status !== "reserved" ||
            String(seat.reservedBy) !== String(userId) ||
            !seat.reservedUntil ||
            seat.reservedUntil <= currentTime
          ) {
            const error = new Error(
              `Seat ${seatNumber} is not reserved by you or its reservation has expired`,
            );
            error.statusCode = statuscode.CONFLICT;
            throw error;
          }
        }

        // 7. Calculate total amount on the backend
        const totalAmount = trip.fare * selectedSeats.length;

        // 8. Mark seats as booked
        for (const seatNumber of selectedSeats) {
          const seat = trip.seats.find(
            (item) => item.seatNumber === seatNumber,
          );

          seat.status = "booked";
          seat.reservedUntil = null;
        }

        // 9. Update available seats
        trip.availableSeats -= selectedSeats.length;

        await trip.save({ session });

        // 10. Generate booking reference
        const bookingReference =
          "RG-" +
          Date.now() +
          "-" +
          crypto.randomBytes(3).toString("hex").toUpperCase();

        // 11. Create booking document
        const booking = new bookingModel({
          userId,
          tripId,
          seats: selectedSeats,
          passengers,
          totalAmount,
          bookingReference,
          bookingStatus: "confirmed",
        });

        await booking.save({ session });

        createdBooking = booking;
      });

      // 12. Send response after successful transaction
      return res.status(statuscode.OK).json({
        success: true,
        message: "Booking confirmed successfully",
        data: createdBooking,
      });
    } catch (error) {
      console.log(error);

      return res.status(error.statusCode || statuscode.SERVER_ERROR).json({
        success: false,
        message: error.statusCode ? error.message : "Internal server error",
      });
    } finally {
      await session.endSession();
    }
  },
  //get coustomer all bookings
  async getBookings(req, res) {
    try {
      const userId = req.user.id;
      if (req.user.role !== "user") {
        return res.status(statuscode.FORBIDDEN).json({
          success: false,
          message: "only authenticate coustomer can get their all bookings",
        });
      }
      const get = await bookingModel.find({ userId });
      return res.status(statuscode.OK).json({
        success: true,
        message: "Showing all bookings",
        data: get,
      });
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "internal server error",
      });
    }
  },
  //get booking by id
  async getbookingbyId(req, res) {
    try {
      const userId = req.user.id;
      if (req.user.role !== "user") {
        return res.status(statuscode.FORBIDDEN).json({
          success: false,
          message: "only authenticate coustomer can get their all bookings",
        });
      }
      const id = req.params.id;
      const getbyId = await bookingModel.findOne({ _id: id, userId: userId });
      if (!getbyId) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message: "Booking not found",
        });
      }
      return res.status(statuscode.OK).json({
        success: true,
        message: "Shwoing bookings by id",
        data: getbyId,
      });
    } catch (error) {
      console.log(error);
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "internal server error",
      });
    }
  },
  // cancel booking
  

async cancelBooking(req, res) {
  try {
    const bookingId = req.params.id;
    const userId = req.user.id;

    // Customer validation
    if (req.user.role !== "user") {
      return res.status(statuscode.FORBIDDEN).json({
        success: false,
        message: "Only customers can cancel bookings"
      });
    }

    // Find booking
    const cancel = await bookingModel.findOne({
      _id: bookingId,
      userId: userId
    });

    if (!cancel) {
      return res.status(statuscode.NOT_FOUND).json({
        success: false,
        message: "Booking not found"
      });
    }

    // Check booking status
    if (cancel.bookingStatus !== "confirmed") {
      return res.status(statuscode.BAD_REQUEST).json({
        success: false,
        message: "Booking is already cancelled"
      });
    }

    // Find trip
    const trip = await tripModel.findById(cancel.tripId);

    if (!trip) {
      return res.status(statuscode.NOT_FOUND).json({
        success: false,
        message: "Trip not found"
      });
    }

    // Release seats
    for (const seatNumber of cancel.seats) {
      const seat = trip.seats.find(
        item => item.seatNumber === seatNumber
      );

      if (!seat || seat.status !== "booked") {
        return res.status(statuscode.CONFLICT).json({
          success: false,
          message: `Seat ${seatNumber} is not booked`
        });
      }

      seat.status = "available";
      seat.reservedBy = null;
      seat.reservedUntil = null;
    }

    // Restore available seats
    trip.availableSeats += cancel.seats.length;

    await trip.save();

    // Update booking
    cancel.bookingStatus = "cancelled";

    await cancel.save();

    return res.status(statuscode.OK).json({
      success: true,
      message: "Booking cancelled successfully",
      data: cancel
    });

  } catch (error) {
    console.log(error);

    return res.status(statuscode.SERVER_ERROR).json({
      success: false,
      message: "Internal server error"
    });
  }
}


};

module.exports = bookingController;
