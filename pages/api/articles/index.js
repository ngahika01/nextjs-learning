import { articles } from "../../../data";

export default function Handler(req, res) {
  res.status(200).json(articles);
}
