import { NextApiHandler } from "next";

const login: NextApiHandler = (req, res) => {
  if (req.method !== "POST") {
    res.status(999).send({ message: "POSTなんだよなぁ・・・" });
    return;
  }
  res.setHeader("Set-Cookie", "session=logined;path=/");
  res.status(204).send("");
};

export default login;
