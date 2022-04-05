import { identifierName } from '@angular/compiler';
import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Item } from '../model/item';
import { Livro } from '../model/livro';
import { LivroCarrinhoDTO } from '../model/livroCarrinho';

@Injectable({
  providedIn: 'root',
})
export class CarrinhoService {
  livros: Item[] = [];

  private storage: Storage;

  constructor() {
    this.storage = window.localStorage;
  }

  adicionarAoCarrinho(livro: LivroCarrinhoDTO) {
    this.livros = JSON.parse(this.storage.getItem('carrinho') || '[]');
    this.livros.push(this.converterParaItem(livro));
    this.storage.setItem('carrinho', JSON.stringify(this.livros));
  }

  aumentarItem(id: number) {
    this.livros = JSON.parse(this.storage.getItem('carrinho') || '[]');
    console.log(this.livros);
    this.livros.forEach((livro) => {
      if (livro.id == id) {
        livro.quantidadeDeLivros++;
      }
    });
    this.storage.setItem('carrinho', JSON.stringify(this.livros));
    location.reload();
  }

  diminuirItem(id: number) {
    this.livros = JSON.parse(this.storage.getItem('carrinho') || '[]');
    console.log(this.livros);
    this.livros.forEach((livro) => {
      if (livro.id == id) {
        livro.quantidadeDeLivros--;
        if(livro.quantidadeDeLivros==0 && livro.id == id){
          this.livros.pop();
        }
      }
    });
    this.storage.setItem('carrinho', JSON.stringify(this.livros));
    location.reload();
  }


  buscarLivros() {
    if (this.storage) {
      return JSON.parse(this.storage.getItem('carrinho') || '{}');
    }
    return null;
  }

  removerDoCarrinho(key: string): boolean {
    if (this.storage) {
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  limparCarrinho(): boolean {
    if (this.storage) {
      this.storage.clear();
      return true;
    }
    return false;
  }

  converterParaItem(livro: LivroCarrinhoDTO): Item {
    return {
      id:livro.id,
      livroCarrinhoDTO: livro,
      quantidadeDeLivros: 1,
      precoItem: livro.preco,
    };
  }
}
