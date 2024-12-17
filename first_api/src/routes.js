const UserController = require("./controllers/UserControlles");



module.exports = [
  {
    endpoint: "/users",
    method: "GET",
    handler: UserController.listUsers,
  },
];
