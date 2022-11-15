const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

// Routes
const index = require("./routes/index.routes") 

app.listen(PORT, (error) =>{
    if(!error){
        console.log(`Server running on port ${PORT}`);
        app.use("/", index);
    }
    else{
        console.log(`Error occurred, server can't start`, error);
    }
});