import axios from 'axios';
import type {NextApiRequest, NextApiResponse} from "next";

const apiURL = process.env.API_URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const {param1} = req.query;
    const result = await axios
      .get(`${apiURL}?param1=${param1}`)
      .then((response) => response.data);

    return res.status(200).json(result);
  }
}