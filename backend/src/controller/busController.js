const busModel = require("../models/bus");
const statuscode = require("../utils/statuscode");
const uploadToCloudinary = require("../utils/cloudinaryUploads");

class busController {
  
async createBus(req, res) {
  try {
    const {
      busName,
      busNumber,
      busType,
      category,
      totalSeats,
      description,
      amenities,
      source,
      destination,
    } = req.body;

    if (
      !busName ||
      !busNumber ||
      !busType ||
      !category ||
      totalSeats == null ||
      !description ||
      !source ||
      !destination
    ) {
      return res.status(statuscode.BAD_REQUEST).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    if (
      req.user.role !== "company" ||
      req.user.companyStatus !== "approved"
    ) {
      return res.status(statuscode.FORBIDDEN).json({
        success: false,
        message: "Only approved companies can post bus",
      });
    }

    const checkbusNumber = await busModel.findOne({ busNumber });

    if (checkbusNumber) {
      return res.status(statuscode.BAD_REQUEST).json({
        success: false,
        message: "Bus number already exists",
      });
    }

    // Upload bus image
    let busImageUrl = "busImage.jpg";

    if (req.files?.busImage?.[0]) {
      busImageUrl = await uploadToCloudinary(
        req.files.busImage[0].buffer,
        "routeglow/buses"
      );
    }

    // Upload destination image
    let destinationImageUrl = "destination.jpg";

    if (req.files?.destinationImage?.[0]) {
      destinationImageUrl = await uploadToCloudinary(
        req.files.destinationImage[0].buffer,
        "routeglow/destinations"
      );
    }

    const create = await busModel.create({
      companyId: req.user.id,
      busName,
      busNumber,
      busType,
      category,
      totalSeats,
      description,
      source,
      destination,
      amenities: amenities || [],
      busImage: busImageUrl,
      destinationImage: destinationImageUrl,
    });

    return res.status(statuscode.CREATED).json({
      success: true,
      message: "Bus created successfully",
      data: create,
    });

  } catch (error) {
    console.log("Create Bus Error:", error);

    return res.status(statuscode.SERVER_ERROR).json({
      success: false,
      message: "Internal server error",
    });
  }
}

  //get all buses
  async getAllbus(req, res) {
    try {
      const company = req.user.id;
      const getall = await busModel.find({ companyId: company });
      return res.status(statuscode.OK).json({
        success: true,
        message: "Shwoing all buses",
        data: getall,
        length: getall.length,
      });
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error ",
      });
    }
  }
  // get bus by Id
  async getbusByid(req, res) {
    try {
      const id = req.params.id;
      const company = req.user.id;
      const bus = await busModel.findOne({ _id: id, companyId: company });
      if (!bus) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message: "Id is not valid",
        });
      }
      return res.status(statuscode.OK).json({
        success: true,
        message: "showing single bus by id",
        data: bus,
      });
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  // get bus by Id and update
  async getbusByidUpdate(req, res) {
    try {
      const id = req.params.id;
      const company = req.user.id;
      const {
        busName,
        busNumber,
        busType,
        category,
        totalSeats,
        description,
        amenities,
        source,
        destination
      } = req.body;

      const bus = await busModel.findOneAndUpdate(
        { _id: id, companyId: company },
        {
          busName,
          busNumber,
          busType,
          category,
          totalSeats,
          description,
          amenities,
          source, 
          destination
        },
        { new: true, runValidators: true },
      );
      if (!bus) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message: "Id is not valid",
        });
      }
      return res.status(statuscode.OK).json({
        success: true,
        message: "showing single bus by id",
        data: bus,
      });
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
  // soft delete
  async softDelete(req, res) {
    try {
      const company = req.user.id;
      const id = req.params.id;
      const deleteBus = await busModel.findOneAndUpdate(
        { _id: id, companyId: company },
        { isDeleted: true },
        { new: true },
      );
      if (!deleteBus) {
        return res.status(statuscode.NOT_FOUND).json({
          success: false,
          message: "Bus is not found",
        });
      }
      //

      return res.status(statuscode.OK).json({
        success: true,
        message: "Bus is deleted successfully",
        data: deleteBus,
      });
    } catch (error) {
      return res.status(statuscode.SERVER_ERROR).json({
        success: false,
        message: "Internal server error",
      });
    }
  }
}

module.exports = new busController();
