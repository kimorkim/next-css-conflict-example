import css from "./index.scss";
import Link from "next/link";
const Index = () => (
  <div className="container">
    <style>{css.toString()}</style>
    <h1>index</h1>
    <Link href="/b">
      <a>a pagina b</a>
    </Link>
  </div>
);
export default Index;
