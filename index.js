import express from "express";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";
import connectDb from "./config/dbConnection.js";



dotenv.config();
connectDb();

const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;



app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
