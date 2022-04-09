import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Autor } from 'src/app/model/autor';
import { Categoria } from 'src/app/model/categoria';
import { Livro } from 'src/app/model/livro';
import { AutorService } from 'src/app/services/autor.service';
import { CategoriaService } from 'src/app/services/categoria.service';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-criar-livro',
  templateUrl: './criar-livro.component.html',
  styleUrls: ['./criar-livro.component.css']
})
export class CriarLivroComponent implements OnInit {

  livro : Livro = {} as Livro;

  autores: Autor[] = [];

  categorias: Categoria[] = [];

  error: Error | undefined;

  constructor(private formBuilder: FormBuilder, private livroService : LivrosService,
     private autorService: AutorService, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.buscarAutores();
    this.buscarCategorias();
  }

  livroForm = this.formBuilder.group({
  titulo: '',
  sumario: '',
  preco: '',
  numeroPaginas: '',
  isbn: '',
  dataPublicacao: '',
  capa: '',
  categoriaDTO: '',
  autorDTO: ''})

  onSave(livro: Livro) {
    if (this.livroForm.value.name !== '') {
      this.livro.titulo = this.livroForm.value.titulo;
      this.livro.sumario = this.livroForm.value.sumario;
      this.livro.preco = this.livroForm.value.preco;
      this.livro.numeroPaginas = this.livroForm.value.numeroPaginas;
      this.livro.isbn = this.livroForm.value.isbn;
      this.livro.dataPublicacao = this.livroForm.value.dataPublicacao; 
      this.livro.capa = this.livroForm.value.capa; 
      this.livro.categoriaDTO = this.livroForm.value.categoriaDTO; 
      this.livro.autorDTO = this.livroForm.value.autorDTO;          
      console.log(this.livro)
      this.livroService.salvarLivro(livro).subscribe(
        (newLivro) => {
          this.livro = newLivro;          
        },
        (error) => (this.error = error as any)
      );
      window.alert("Cadastrado com sucesso!")      
    }
  }

  buscarAutores(){
    return this.autorService.buscarTodosAutores().subscribe(autor => this.autores = autor);
  }

  buscarCategorias(){
    return this.categoriaService.buscarTodasCategorias().subscribe(categoria => this.categorias = categoria);
  }
}
