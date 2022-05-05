import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Autor } from 'src/app/model/autor';
import { AutorService } from 'src/app/services/autor.service';

@Component({
  selector: 'app-criar-autor',
  templateUrl: './criar-autor.component.html',
  styleUrls: ['./criar-autor.component.css']
})
export class CriarAutorComponent implements OnInit {

  autor: Autor ={} as Autor;
  error: Error | undefined;

  constructor(private autorService: AutorService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  autorForm = this.formBuilder.group({
    nome:'',
    email:'',
    descricao:'',
    dataCriacao:''
  });

  onSave(autor: Autor) {
    if (this.autorForm.value.name !== '') {
      this.autor.nome = this.autorForm.value.nome;
      this.autor.email = this.autorForm.value.email;
      this.autor.descricao = this.autorForm.value.descricao;

      this.autorService.salvarAutor(autor).subscribe(autorNovo => this.autor = autorNovo);
      window.alert("Cadastrado com sucesso!")
    }
  }





}
