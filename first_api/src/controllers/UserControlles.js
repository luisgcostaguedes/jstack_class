const { error } = require("console");
const users = require("../mocks/users");

module.exports = {
  listUsers(request, response) {
    const { order } = request.query;

    const sortedUsers = users.sort((a, b) => {
      if (order === "desc") {
        console.log("desc");
        return a.id < b.id ? 1 : -1;
      }
      console.log("asc");
      return a.id > b.id ? 1 : -1;
    });
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(sortedUsers)); // como o users é um array de objetos, é necessário transformar em uma srting
  },

  getUserById(request, response) {
    const { id } = request.params;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
      response.writeHead(400, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ error: "User not found" }));
    } else {
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(user));
    }
  },
};
