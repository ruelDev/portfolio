import express from "express";
import dotenv from "dotenv";
import path from "path";
import { connectDB } from "./config/db.js";
import productsRouter from "./routes/project.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.resolve();

app.use(express.json());
app.use("/api/projects", productsRouter);
if(process.env.NODE_ENV === "production") {
    const staticPath = path.join(__dirname, "frontend", "dist");
    
    app.use(express.static(staticPath));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(staticPath, "index.html"));
        console.log('testss')
    });
}

app.listen(PORT, () => {
    connectDB();
    console.log("Server running at http://localhost:" + PORT)
});