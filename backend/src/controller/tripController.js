const tripModel = require("../models/trip");
const statuscode = require("../utils/statuscode");
const busModel = require("../models/bus");

class tripcontroller {
  async createTrip(req, res) {
    try {
      const companyId = req.user.id;
      if (req.user.role != "company" || req.user.companyStatus != "approved") {
        return res.status(statuscode.FORBIDDEN).json({
          success: false,
          message: "Only approve can create trip and schedule this",
        });
      }
      const busId = req.body.busId;
      const findbus = await busModel.findOne({
        _id: busId,
        companyId: companyId,
        isDeleted: false,
      });
      if (!findbus) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message: "Bus Not found",
        });
      }
      const availableSeats = findbus.totalSeats;
      const { departureDateTime, arrivalDateTime, fare } = req.body;
      if (!departureDateTime || !arrivalDateTime) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "All feilds are required",
        });
      }
      if (
        fare === undefined ||
        fare === null ||
        fare === "" ||
        !Number.isFinite(Number(fare)) ||
        Number(fare) <= 0
      ) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "Fare must be a valid positive number",
        });
      }
      const firstTime = new Date(departureDateTime).getTime();
      const secondTime = new Date(arrivalDateTime).getTime();

      if (Number.isNaN(firstTime) || Number.isNaN(secondTime)) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "please provide valid departure and arrival dates ",
        });
      }
      if (secondTime <= firstTime) {
        return res.status(statuscode.BAD_REQUEST).json({
          success: false,
          message: "Arrival time must be later than departure time ",
        });
      }
      const creatingTrip = await tripModel.create({
        companyId,
        busId,
        departureDateTime,
        arrivalDateTime,
        fare: Number(fare),
        availableSeats,
      });
      return res.status(statuscode.CREATED).json({
        success: true,
        message: "Trip is created successfully",
        data: creatingTrip,
      });
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  // get all trip for a company
  async getAllTrip(req, res) {
    try {
      const companyId = req.user.id;
      if (!companyId) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message: "No trip found",
        });
      }
      const gettrip = await tripModel.find({ companyId: companyId })
      if (gettrip) {
        return res.status(statuscode.OK).json({
          success: true,
          message: "showing all company trips",
          data: gettrip,
          length : gettrip.length
        })
      }
    } catch (error) {
      console.log(error)
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  //get trip by id
  async getTipById(req, res) {
    try {
      const  id  = req.params.id
      const companyId = req.user.id
      const trip = await tripModel.findById({ _id: id, companyId: companyId })
      if (!trip) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          messaege : "Trip not found"
        })
      }
      return res.status(statuscode.OK).json({
        success: true,
        message: "Tip is showing",
        data : trip
      })
      
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message : "Internal server error"
      })
    }
  }
  //get trip by bus
  async getTripbyBus(req, res) {
    try {
      const companyId = req.user.id
      const busId = req.params.id
//       console.log("Company ID:", companyId);
// console.log("Bus ID:", busId);
// console.log("Bus ID from params:", req.params);
      const getbustrip = await tripModel.find({ companyId: companyId, busId: busId , isDeleted : false })
      if (getbustrip.length === 0) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message : "no trip found for this bus"
        })
      }
      return res.status(statuscode.OK).json({
        success: true,
        message: "All trip showing from one bus",
        data : getbustrip
      })
      
    } catch (error) {
      console.log(error)
       return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message : "Internal server error"
      })
    }
    
  }
  //update trip by id 
  async updateTrip(req, res) {
    try {
      const companyId = req.user.id
      const id = req.params.id
      const { departureDateTime, arrivalDateTime, fare , availableSeats } = req.body;
      const trip = await tripModel.findOneAndUpdate({ companyId: companyId, _id: id },{departureDateTime,arrivalDateTime,fare,availableSeats}, { new: true })
      if (!trip) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message : "tip not found"
        })
      }
      return res.status(statuscode.OK).json({
        success: true,
        message: "Tip updeted successfully",
        data : trip
      })
      
      
    } catch (error) {
      console.log(error)
       return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message : "Internal server error"
      })
    }
  }
  //soft delete for trip 
  async softDelteTrip(req, res) {
    try {
      const companyId = req.user.id
      const id = req.params.id
      const trip = await tripModel.findOneAndUpdate({ companyId: companyId, _id: id }, { isDeleted: true }, { new: true })
      if (!trip) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message :"trip not found"
        })
      }
      return res.status(statuscode.OK).json({
        success: true,
        message: "Trip details updated",
        data : trip
      })
      
    } catch (error) {
       return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message : "Internal server error"
      })
    }
  }
}
module.exports = new tripcontroller();
