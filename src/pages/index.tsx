import Link from "next/link";
import { useEffect, VFC } from "react";

const Index: VFC = () => {
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
      <div>
        <Link href="mypage">マイページ</Link>
      </div>
    </div>
  );
};

export default Index;
