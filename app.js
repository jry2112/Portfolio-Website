const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

// Views Enginge - EJS
app.set('view engine', 'ejs');

// Routes
const indexRouter = require("./routes/index.routes") 

app.listen(PORT, (error) =>{
    if(!error){
        console.log(`Server running on port ${PORT}`);
        // Routers
        app.use("/", indexRouter);
        // Static Files
        app.use(express.static('public'))

    }
    else{
        console.log(`Error occurred, server can't start`, error);
    }
});