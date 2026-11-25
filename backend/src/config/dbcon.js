const momgoose = require("mongoose")

const dbconnect = async () => {
  const response = await momgoose.connect(process.env.MONGO_URL)
  if (response) {
    console.log("Mongo dataBase is connected successfully.....")
  } else {
    console.log("Mongo database is not connected.....")
  }
}

module.exports= dbconnect