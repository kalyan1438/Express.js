import express from "express";
import {logger} from "./middlewares/logger.js";
import userRoutes from "./routes/user.routes.js";
import { errorHandler } from "./middlewares/errorhandler.js";

const app = express();
const port = 3000;

app.use(logger);
app.use("/user",userRoutes);
app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
