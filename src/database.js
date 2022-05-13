import mongoose from "mongoose";
import config from "./config";

(async () => {
  try {
    const db = await mongoose.connect('mongodb+srv://Fyrus13:<password>@cluster0.vop59.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Mongodb is connected to", db.connection.host);
  } catch (error) {
    console.error(error);
  }
})();
