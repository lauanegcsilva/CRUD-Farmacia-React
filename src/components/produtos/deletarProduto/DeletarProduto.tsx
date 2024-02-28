/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import {  useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Produto from "../../../models/Produto";
import { buscar, deletar } from "../../../services/Service";


function DeletarProduto() {
  const [produto, setProduto] = useState<Produto>({} as Produto);

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();



  async function buscarPorId(id: string) {
    try {
      await buscar(`/produtos/${id}`, setProduto, {});
    } catch (error: any) {
      if (error.toString().includes("403")) {
        alert("O token expirou, favor logar novamente");
 
      }
    }
  }


  useEffect(() => {
    if (id !== undefined) {
      buscarPorId(id);
    }
  }, [id]);

  function retornar() {
    navigate("/produtos");
  }

  async function deletarProduto() {
    try {
      await deletar(`/produtos/${id}`, {});

      alert("Produto apagado com sucesso");
    } catch (error) {
      alert("Erro ao apagar o Produto");
    }

    retornar();
  }
  return (
    <div className="container w-1/3 mx-auto">
      <h1 className="text-4xl text-center my-4">Deletar produto</h1>

      <p className="text-center font-semibold mb-4">
        Você tem certeza de que deseja apagar o produto a seguir?
      </p>

      <div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
        <header className="py-2 px-6 bg-rose-600 text-white font-bold text-2xl">
          Produto
        </header>
        <div className="p-4">
          <p className="text-xl h-full">{produto.nome}</p>
          <p>{produto.descricao}</p>
        </div>
        <div className="flex">
          <button
            className="text-slate-100 bg-red-600 hover:bg-red-900 w-full py-2"
            onClick={retornar}
          >
            Não
          </button>
          <button
            className="w-full text-slate-100 bg-rose-400 hover:bg-rose-600 flex items-center justify-center"
            onClick={deletarProduto}
          >
            Sim
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeletarProduto;
