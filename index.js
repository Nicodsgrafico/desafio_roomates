//Imports
import express from "express";
import userRouter from "./routes/userRouter.js";
import gastosRouter from "./routes/gastosRouter.js";

//Variables
const app = express();
const PORT = process.env.PORT || 3000;


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Rutas
app.use("/", userRouter);
app.use("/", gastosRouter);

//Puerto
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));