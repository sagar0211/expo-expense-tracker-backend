const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.send("api called succfully");
})

app.listen(PORT, () => {
   console.log(`==== SEVER STARTED ON PORT ${PORT} ====`);
});


module.exports = app;
