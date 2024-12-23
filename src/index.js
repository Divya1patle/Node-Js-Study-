import express from "express";
import router from "./routes/signup.js";
const app = express();
const PORT = 9091;

app.use(express.json());

app.use('/', router);
// ---------global middleware
app.listen(PORT, () => {
  console.log("server is running on port 9091");
});
// server-------->router-------->controller-------->service-------->model-------->database


