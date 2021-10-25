const express = require("express");

const { sequelize, user } = require("./models");

const app = express();
app.use(express.json());

app.post("/api/users", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);

  try {
    const newUser = await user.create({ username, email, password });

    return res.json(newUser);
  } catch (err) {
    console.log(err, req.body);
    return res.status(500).json(err);
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await user.findAll();

    return res.json(users);
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ error: "Something went wrong", details: err });
  }
});

app.listen({ port: 5000 }, async () => {
  console.log("Server up on http://localhost:5000");
  await sequelize.authenticate();
  console.log("Database Connected!");
});
