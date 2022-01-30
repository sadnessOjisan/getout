import { NextApiHandler } from "next";

const logout: NextApiHandler = (req, res) => {
  res.setHeader(
    "Set-Cookie",
    "session=logined; expires=Fri, 31-Dec-1999 23:59:59 GMT; path=/"
  );
  res.status(200).json({ name: "John Doe" });
};

export default logout;
