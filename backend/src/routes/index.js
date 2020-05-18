const express = require("express");
const routes = express.Router();

const TaskController = require("../controller/TaskController");
const TaskValidation = require("../middlewares/TaskValidation");

routes.post("/task", TaskValidation, TaskController.create);
routes.put("/task/:id", TaskController.update);
routes.get("/task/:id", TaskController.show);
routes.delete("/task/:id", TaskController.delete);
routes.put("/task/:id/:done", TaskController.done);

routes.get("/task/filter/all/:macaddress", TaskController.all);
routes.get("/task/filter/late/:macaddress", TaskController.late);
routes.get("/task/filter/today/:macaddress", TaskController.today);
routes.get("/task/filter/week/:macaddress", TaskController.week);
routes.get("/task/filter/month/:macaddress", TaskController.month);
routes.get("/task/filter/year/:macaddress", TaskController.year);

module.exports = routes;
