import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth";
dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(authRouter);

app.listen(PORT, () => {
    console.log(`Corriendo sobre el puerto ${PORT}`);
});