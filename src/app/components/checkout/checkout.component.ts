import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Carrinho } from 'src/app/model/carrinho';
import { Endereco } from 'src/app/model/endereco';
import { Pessoa } from 'src/app/model/pessoa';
import { CarrinhoService } from 'src/app/services/carrinho.service';
import { ViacepService } from 'src/app/services/viacep.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  carrinho: any;

  pessoa: Pessoa = {} as Pessoa;

  endereco: Endereco = {} as Endereco;

  constructor( private route: ActivatedRoute,
               private carrinhoService: CarrinhoService,
               private formBuilder: FormBuilder,
               private viaCep: ViacepService) { }

  ngOnInit(): void {
    this.carrinhoService.buscarCarrinho().subscribe(retorno => this.carrinho = retorno);
  }


  pessoaForm = this.formBuilder.group({
    nome:'',
    cpf:'',
    carrinho:'',
    endereco:''
  });

  buscarEndereco(){
    this.viaCep.buscarEndereco(this.endereco.cep).subscribe(retorno =>{
      this.endereco = retorno,
      console.log(this.endereco)
    })
  }

  comprar(){
    this.pessoa.nome = this.pessoaForm.value.nome;
    this.pessoa.cpf = this.pessoaForm.value.cpf;
    this.pessoa.carrinho = this.carrinho;
    this.endereco.numero = this.pessoaForm.value.numero;
    this.pessoa.endereco = this.endereco;
    console.log(this.pessoa);
  }

}
