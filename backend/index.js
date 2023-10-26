const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const app = express();

const passportSetup = require("./passport");
const authRoute = require("./routes/auth");
const db = require("./routes/student")

app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use('/students', db)
app.use("/auth", authRoute);

app.listen("5000", () => {
  console.log("Server is running!");
});
