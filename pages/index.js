
import './index.scss'
import Link from 'next/link'
const Index = ()=>(
  <div className="container">
    <h1>index</h1>
    <Link href="/b">
      <a>a  pagina b</a>
    </Link>
  </div>
);
export default Index;
