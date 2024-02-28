
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="w-full bg-red-900 text-white flex justify-center py-4">
        <div className="container flex justify-between text-lg">
          <div className="text-2xl font-bold uppercase">CRUD Farmácia</div>

          <div className="flex gap-4">
            <Link to="/home" className="hover:underline">
              Home
            </Link>
            <Link to="/produtos" className="hover:underline">
              Produtos
            </Link>
            <Link to="/categorias" className="hover:underline">
              Categorias
            </Link>
            <Link to="/cadastroCategoria" className="hover:underline">
              Cadastrar categoria
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
