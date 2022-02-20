const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
})

app.listen(80, () => console.log(`Server is running on port ${PORT}`));