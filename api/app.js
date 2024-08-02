import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import testRoute from "./routes/test.route.js"
import postRoute from "./routes/post.route.js"
import chatRoute from "./routes/chat.route.js"
import messageRoute from "./routes/message.route.js"

// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

// Use environment variable for client URL in CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL, // Using CLIENT_URL from .env
  credentials: true
}));

app.use("/api/auth", authRoute);
app.use("/api/test",testRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postRoute);
app.use("/api/chats",chatRoute);
app.use("/api/messages",messageRoute);



// Port configuration
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
