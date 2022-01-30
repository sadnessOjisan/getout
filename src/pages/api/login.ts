import { NextApiHandler } from "next";

const login: NextApiHandler = (req, res) => {
  res.setHeader("Set-Cookie", "session=logined;path=/");
  res.status(200).json({ name: "John Doe" });
};

export default login;
