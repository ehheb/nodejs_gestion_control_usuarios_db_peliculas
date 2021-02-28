import app from "./app"
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Corriendo sobre el puerto ${PORT}`);
});