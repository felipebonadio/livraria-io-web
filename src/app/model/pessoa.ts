import { Carrinho } from "./carrinho";
import { Endereco } from "./endereco";

export interface Pessoa{
  id: number;
  nome: string;
  cpf: string;
  carrinho: Carrinho;
  endereco: Endereco;
}
