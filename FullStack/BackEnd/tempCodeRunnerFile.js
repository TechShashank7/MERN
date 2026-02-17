const app = require("express");

app.get("/singup", (req, res) => {
    res.send("Hello World from Express");
});

app.listen(3000, () => {
    console.log("Server is running at http://localhost:3000");
});