import { NextApiHandler, NextApiRequest } from "next";
import { z } from "zod";

type User = {
  id: number;
  name: string;
  secretInfo: string;
};

const usersResSchema = z
  .object({ id: z.number(), name: z.string() })
  .strict()
  .array();

export type UsersRes = z.infer<typeof usersResSchema>;

const serializer = (user: User[]) => {
  const res = user.map((u) => ({ id: u.id, name: u.name }));
  return usersResSchema.parse(res);
};

const users: NextApiHandler = (req, res) => {
  const usersData: User[] = [
    {
      id: 1,
      name: "ojisan",
      secretInfo: "I love you",
    },
    {
      id: 2,
      name: "onisan",
      secretInfo: "I love you",
    },
    {
      id: 3,
      name: "ojiisan",
      secretInfo: "I love you",
    },
  ];
  try {
    const response = serializer(usersData);
    res.status(200).send(response);
  } catch {
    res.status(500).send("fail");
  }
};

export default users;
