import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(authRouter);

app.listen(PORT, () => {
    console.log(`Corriendo sobre el puerto ${PORT}`);
});