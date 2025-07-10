import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse               )
{
  try {
    const response = await fetch("https://meet-backend.onrender.com/github");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch GitHub repos" });
  }
}
