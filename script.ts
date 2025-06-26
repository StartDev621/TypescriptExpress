import express, { Request,Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
    res.json("Hello from Typescript + Express !");
})

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
