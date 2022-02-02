import { NextApiHandler } from "next";

const login: NextApiHandler = (req, res) => {
  if (req.method !== "POST") {
    res.status(444).send({ message: "POSTなんだよなぁ・・・" });
  }
  res.setHeader("Set-Cookie", "session=logined;path=/");
  res.status(204).send("");
};

export default login;
