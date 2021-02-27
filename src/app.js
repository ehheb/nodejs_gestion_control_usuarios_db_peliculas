import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import roleRoutes from "./routes/roles";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import jwt from "express-jwt";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";
import dotenv from "dotenv";
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));

const authJWT = { secret: process.env.SECRET_KEY, algorithms: ["HS256"]}

app.use("/api/v1",authRoutes);
// app.use("/api/v1",userRoutes);
// app.use("/api/v1",roleRoutes);
app.use("/api/v1", jwt(authJWT), userRoutes);
app.use("/api/v1", jwt(authJWT), roleRoutes);

export default app;
