import { NextApiHandler } from "next";

const logout: NextApiHandler = (req, res) => {
  if (req.method !== "POST") {
    res.status(444).send({ message: "POSTなんだよなぁ・・・" });
  }
  res.setHeader(
    "Set-Cookie",
    "session=logined; expires=Fri, 31-Dec-1999 23:59:59 GMT; path=/"
  );
  res.status(204).send("");
};

export default logout;
