import { GetServerSideProps } from "next";
import Link from "next/link";
import { useEffect, VFC } from "react";

type Props =
  | {
      _tag: "s";
      data: string;
    }
  | {
      _tag: "f";
      message: string;
    };

const Mypage: VFC<Props> = (props) => {
  return (
    <div>
      {props._tag === "s" ? (
        <div>my name is {props.data}</div>
      ) : (
        <div>{props.message}</div>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const cookie = ctx.req.cookies["session"];
  const isLogined = cookie === "logined";
  if (!isLogined) {
    return {
      props: {
        _tag: "f",
        message: "ログインしてください",
      },
    };
  }
  return {
    props: {
      _tag: "s",
      data: "d",
    },
  };
};

export default Mypage;
