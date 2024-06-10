import path from "path";
import axios from "axios";
import { log } from "console";

const __dirname = path.resolve();

export const home = (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
};

