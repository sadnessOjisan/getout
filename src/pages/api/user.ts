import { NextApiHandler, NextApiRequest } from "next";

const getIP = function (req: NextApiRequest) {
  if (req.headers["x-forwarded-for"]) {
    return req.headers["x-forwarded-for"];
  }
  if (req.connection && req.connection.remoteAddress) {
    return req.connection.remoteAddress;
  }
  if (req.socket && req.socket.remoteAddress) {
    return req.socket.remoteAddress;
  }
  return "0.0.0.0";
};
const user: NextApiHandler = (req, res) => {
  const session = req.cookies["session"];
  const ip = getIP();
  if (!session) {
    res
      .status(401)
      .json(`無理やり叩こうとするな！お前のip控えたからな！ ip: ${ip}`);
    return;
  }
  res.status(200).json({ name: "John Doe" });
};

export default user;
