import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Livro } from 'src/app/model/livro';
import { DetalhesLivroService } from '../../services/detalhes-livro-service';

@Component({
  selector: 'app-detalhes-livro',
  templateUrl: './detalhes-livro.component.html',
  styleUrls: ['./detalhes-livro.component.css'],
})
export class DetalhesLivroComponent implements OnInit {
  
  livro: Livro = {} as Livro;
  errorMsg: string | undefined;
  
  constructor(
    private route: ActivatedRoute,
    private service: DetalhesLivroService
  ) {}

  ngOnInit(): void {
    const livroId = Number(this.route.snapshot.paramMap.get('id'));

    this.service.find(livroId).subscribe(livro => { this.livro = livro},err=>{this.errorMsg = err});
  }
}
