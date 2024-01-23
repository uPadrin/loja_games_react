import Categoria from "./Categoria";

export default interface Produto{
id: number;
nome: string;
preço: number;
foto: string;
categoria?: Categoria | null;
}