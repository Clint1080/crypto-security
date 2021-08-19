const bcrypt = require('bcryptjs')
const users = []

module.exports = {
    login: (req, res) => {

      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        const existing = bcrypt.compareSync(password, users[i].passHash);
        if (users[i].username === username && existing) {
          res.status(200).send(users[i])
          console.log("Logging In User");
          return
        }
      }
      res.status(400).send("User not found.")
    },

    register: (req, res) => {
      const {username, email, firstName, lastName, password} = req.body
      const salt = bcrypt.genSaltSync(5);
      const passHash = bcrypt.hashSync(password, salt);
      
      let userObj = {
        username,
        email,
        firstName,
        lastName,
        passHash
      };
      console.log('Registering User')
      console.log(userObj)
      users.push(userObj)
      res.status(200).send(userObj)
    }
}