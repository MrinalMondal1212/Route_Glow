
const cloudinary = require("../config/cloundinary");
const { Readable } = require("stream");

const uploadToCloudinary = (fileBuffer, folder) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: folder,
        resource_type: "image",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve(result.secure_url);
      },
    );

    Readable.from([fileBuffer]).pipe(uploadStream);
  });
};

module.exports = uploadToCloudinary;
