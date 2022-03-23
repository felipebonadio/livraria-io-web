import { Autor } from './autor';
import { Categoria } from './categoria';
export interface Livro {
  id: number;
  titulo: string;
  sumario: string;
  preco: string;
  numeroPaginas: number;
  isbn: string;
  dataPublicacao?: Date;
  capa: string;
  categoriaDTO: Categoria;
  autorDTO: Autor;
}
