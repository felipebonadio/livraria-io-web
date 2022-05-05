import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Livro } from 'src/app/model/livro';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  livros: Livro[] = [];
  constructor(private livroService: LivrosService) {}

  ngOnInit(): void {
    this.buscarLancamentos();
  }

  buscarLancamentos() {
    return this.livroService
      .buscarLancamentos()
      .subscribe((livros) => (this.livros = livros));
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  };
}
