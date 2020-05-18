const express = require("express");
const cors = require("cors");
const app = express();
const TaskRoutes = require("./routes");

app.use(cors());
app.use(express.json());
app.use(TaskRoutes);

app.listen(4000);
