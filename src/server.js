// import express from "express";
// import authRouter from "./routes/auth";
// import cors from "cors";
// import helmet from "helmet";
//import morgan from "morgan";
//import jwtValidate from "express-jwt";
import app from "./app"
import dotenv from "dotenv";
// import swaggerUI from "swagger-ui-express";
// import swaggerDocument from "../swagger.json";


dotenv.config();

const PORT = process.env.PORT || 8000;

// const app = express();

// app.use(express.json());
// app.use(cors());
// app.use(helmet());
// app.use(morgan("dev"));

// app.use(authRouter);

// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument));



app.listen(PORT, () => {
    console.log(`Corriendo sobre el puerto ${PORT}`);
});