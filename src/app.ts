import { Request, Response } from "express";
// import * as mongoose from "mongoose";

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = 5100;

const hubkaBobs = [
  {
    name: "Hubka Bob1",
    age: 18,
    gender: "other",
  },
  {
    name: "Hubka Bob2",
    age: 18,
    gender: "other",
  },
  {
    name: "Hubka Bob3",
    age: 18,
    gender: "other",
  },
  {
    name: "Hubka Bob4",
    age: 18,
    gender: "other",
  },
  {
    name: "Hubka Bob5",
    age: 18,
    gender: "other",
  },
];

app.get("/hubkabobs", (_req: Request, res: Response) => {
  //request ot db to get info
  res.json(hubkaBobs);
});

app.post("/hubkabobs", (req: Request, res: Response) => {
  const hubkaBob = req.body;
  hubkaBobs.push(hubkaBob);

  res.status(201).json({ message: "Hubka Bob created" });
});

app.put("/hubkabobs/:id", (req: Request, res: Response) => {
  console.log(req.params);
  const { id } = req.params;
  const updatedHubka = req.body;

  hubkaBobs[+id] = updatedHubka;
  res.status(200).json({
    message: "Hubka Bob updated successfully",
    data: hubkaBobs[+id],
  });
});

app.delete("/hubkabobs/:id", (req: Request, res: Response) => {
  const { id } = req.params;
  hubkaBobs.splice(+id, 1);

  res.status(200).json({
    message: "Hubka Bob deleted",
    data: hubkaBobs[+id],
  });
});

app.listen(PORT, () => {
  // mongoose.connect("mongodb://127.0.0.1:27017");
  console.log(`Server has started on PORT ${PORT}`);
});
