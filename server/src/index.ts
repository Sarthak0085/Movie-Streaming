import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { connectDB } from './config/db.js';
import { ErrorMiddleware } from './middlewares/error.js';
import router from './routes/index.js';
import path from "path";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

//connect db
connectDB();

// main route
app.get("/", (req, res) => {
    res.send("running.....")
});

// app.get('/api/v1/download-movie', (req, res) => {
//     const { title } = req.query;

//     if (!title) {
//         return res.status(400).json({ error: 'Movie title is required.' });
//     }

//     const movieFilePath = path.join(__dirname, 'movies', `${title}.mp4`);

//     res.download(movieFilePath, `${title}.mp4`, (err) => {
//         if (err) {
//             console.error('Error downloading movie:', err);
//             res.status(500).json({ error: 'Internal Server Error' });
//         }
//     });
// });

//other routes
app.use("/api/v1", router)

//error handling middleware
app.use(ErrorMiddleware);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on the port : ${PORT}`);
})