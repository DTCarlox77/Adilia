import Contador from "../components/Contador";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
        <Contador />
        <h1>Hola Adilia</h1>

        <Link to={{ pathname: 'api' }} >Página de la API</Link>
    </div>
  )
}

export default Home;