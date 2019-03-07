import css from "./b.scss";
import Link from "next/link";
const B = () => (
  <div className="container">
    <style>{css.toString()}</style>
    <h1>b</h1>
    <Link href="/">
      <a>a pagina index</a>
    </Link>
  </div>
);
export default B;
