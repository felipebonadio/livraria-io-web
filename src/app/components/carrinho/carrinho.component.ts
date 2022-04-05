import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from 'src/app/model/item';
import { Livro } from 'src/app/model/livro';
import { LivroCarrinhoDTO } from 'src/app/model/livroCarrinho';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  items: Item[] = []
  

  constructor(private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.carregarItensCarrinho();    
  }

  carregarItensCarrinho(){    
    this.items = this.carrinhoService.buscarLivros();
  }

  calcularPreco(a:number, b:number){
   return a*b;
  }

  limparCarrinho(){
    this.carrinhoService.limparCarrinho();
    location.reload();  
  }

  aumentarItem(id: number){
    this.carrinhoService.aumentarItem(id);
  }

  diminuirItem(id:number){
    this.carrinhoService.diminuirItem(id);
  }
}
