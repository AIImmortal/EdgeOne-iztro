import express from "express";
import { astro } from "iztro";
const app = express();

app.use(express.json());

app.post("/ziweipan", (req, res) => {
    const { BirthDate, BirthTime, Gender } = req.body;
    const pan = astro.bySolar(BirthDate, BirthTime, Gender);
    res.json(pan);
});

export default app;