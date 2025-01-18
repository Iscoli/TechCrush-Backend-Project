import express from "express";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";
import connectDb from "./config/dbConnection.js";
import cors from "cors";

dotenv.config();
connectDb();

const app = express();

// CORS configuration
const allowedOrigins = [
  "http://localhost:3000",
  "https://capstone-proj-jet.vercel.app",
  "https://techcrush-backend-project.onrender.com",
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
