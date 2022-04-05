import { Item } from "./item";

export interface Carrinho{
    id: string;
    item: Item[];
    precoTotal: number;
}