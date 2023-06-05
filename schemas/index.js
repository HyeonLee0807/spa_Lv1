const mongoose = require("mongoose");

const connect = () => {
     mongoose
    .connect("mongodb:localhost:27017/spa_Lv1")
    .then(() =>{
      console.log("connecting!")
    })
    .catch(err => "에러발생 :" +console.log(err));
};

mongoose.connection.on("error", err => {
  console.error("db connect error!", err);
});

module.exports = connect;