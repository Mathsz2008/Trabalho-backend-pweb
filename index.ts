import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    let name = "Matheus Rayara e Silva Cosmicidade";
    let age = 34;

    res.json({ name, age });
});

export default router;