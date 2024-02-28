import Categoria from "./Categoria";

export default interface Produto {
  id: number;
  nome: string;
  descricao: string;
  data: string;
  categoria: Categoria | null;
}
