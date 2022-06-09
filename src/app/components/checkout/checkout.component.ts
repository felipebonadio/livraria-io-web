import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Carrinho } from 'src/app/model/carrinho';
import { CarrinhoService } from 'src/app/services/carrinho.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  carrinho: any;

  constructor( private route: ActivatedRoute, private carrinhoService: CarrinhoService) { }

  ngOnInit(): void {
    this.carrinhoService.buscarCarrinho().subscribe(retorno => this.carrinho = retorno);
  }

}
