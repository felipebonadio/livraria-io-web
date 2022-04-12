import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Categoria } from 'src/app/model/categoria';
import { CategoriaService } from 'src/app/services/categoria.service';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent implements OnInit {

  categoria : Categoria = {} as Categoria;

  error: Error | undefined;

  constructor(private formBuilder: FormBuilder, private categoriaService: CategoriaService) { }

  ngOnInit(): void {
  }

  categoriaForm = this.formBuilder.group({
    nome : '',
    descricao: ''
  });

  onSave(categoria: Categoria) {
    if (this.categoriaForm.value.name !== '') {
      this.categoria.nome = this.categoriaForm.value.nome;
      this.categoria.descricao = this.categoriaForm.value.descricao;
      
      this.categoriaService.salvarCategoria(categoria).subscribe(
        (categoriaNova) => {
          this.categoria = categoriaNova;          
        },
        (error) => (this.error = error as any)
      );
      window.alert("Cadastrado com sucesso!")      
    }
  }
}
