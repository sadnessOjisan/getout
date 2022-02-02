import { GetServerSideProps } from "next";
import Link from "next/link";
import { useEffect, VFC } from "react";
import { UsersRes } from "./api/users";

type Props =
  | {
      _tag: "s";
      data: UsersRes;
    }
  | {
      _tag: "f";
      message: string;
    };

const Index: VFC<Props> = (props) => {
  useEffect(() => {
    const styles = `font-size: 40px;
         color: red;
         line-height: 2;
         padding: 10px;`;

    console.log(
      "%c" +
        "お前なに開いとるねん！！！！！！！！！！お前がやってること犯罪やぞそれ！！！！！！",
      styles
    );
  }, []);
  return (
    <div>
      <button
        onClick={() => {
          fetch("/api/login", { method: "POST" });
        }}
      >
        login
      </button>
      <button
        onClick={() => {
          fetch("/api/logout", { method: "POST" });
        }}
      >
        logout
      </button>
      <button
        onClick={() => {
          fetch("/api/user");
        }}
      >
        user
      </button>
      <div>
        <Link href="mypage">マイページ</Link>
      </div>
      {props._tag === "s" ? (
        <div>
          {props.data.map((d) => (
            <div>{d.name}</div>
          ))}
        </div>
      ) : (
        <p>fail to get user info</p>
      )}
    </div>
  );
};

export default Index;

const dev = process.env.NODE_ENV !== "production";

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const endpoint = dev
    ? "http://localhost:3000/api/users"
    : "https://getout.vercel.app/api/users";
  const res = await fetch(endpoint);
  const json: UsersRes = await res.json();
  return {
    props: {
      _tag: "s",
      data: json,
    },
  };
};
