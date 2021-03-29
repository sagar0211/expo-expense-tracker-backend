const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);

function connect() {
  mongoose.connect(process.env.DB_URL,{useNewUrlParser: true,useUnifiedTopology: true},
    function (error, db) {
      if (error) {
        console.error(error);
        throw error;
      } else {
        console.log("mongodb connected successfully");
      }
    }
  );
}

module.exports = {
  connect,
};
