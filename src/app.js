import authRoutes from "./routes/auth";
import userRoutes from "./routes/users";
import roleRoutes from "./routes/roles";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";


const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));


app.use("/api/v1",authRoutes);
app.use("/api/v1",userRoutes);
app.use("/api/v1",roleRoutes);

export default app;
