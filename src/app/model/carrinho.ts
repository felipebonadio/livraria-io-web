import { Item } from "./item";

export interface Carrinho{
  id: number;
  item: Item[];
  precoTotal: number;
}
