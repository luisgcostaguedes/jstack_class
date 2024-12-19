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

    response.send(200, sortedUsers);
  },

  getUserById(request, response) {
    const { id } = request.params;
    const user = users.find((user) => user.id === Number(id));
    if (!user) {
      return response.send(400, { error: "User not found" }); //Colocando o return faz com que a aplicação pare caso o usuário não seja encontrado
    }

    response.send(200, user);
  },
};
