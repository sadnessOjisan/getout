import { NextApiHandler } from "next";

const user: NextApiHandler = (req, res) => {
  const session = req.cookies["session"];
  if (!session) {
    res
      .status(401)
      .json(
        `無理やり叩こうとするな！お前のip控えたからな！ ip: ${req.socket.remoteAddress}`
      );
    return;
  }
  res.status(200).json({ name: "John Doe" });
};

export default user;
