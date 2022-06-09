import {  LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LivrosComponent } from './components/livros/livros.component';
import { HttpClientModule } from '@angular/common/http';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
import { AppRoutingModule } from './app-routing.module';
import { SafeHtmlPipe } from './safe-html.pipe';
import { DetalhesLivroComponent } from './components/detalhes-livro/detalhes-livro.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorIntl, MatPaginatorModule } from '@angular/material/paginator';
import { getPortuguesPaginatorIntl } from './utils/ptbr-paginator-intl';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CriarLivroComponent } from './components/admin/criar-livro/criar-livro.component';
import { CriarAutorComponent } from './components/admin/criar-autor/criar-autor.component';
import { CriarCategoriaComponent } from './components/admin/criar-categoria/criar-categoria.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AdminComponent } from './components/admin/admin.component';
import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { CheckoutComponent } from './components/checkout/checkout.component';

registerLocaleData(localePT);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivrosComponent,
    PaginaErroComponent,
    SafeHtmlPipe,
    DetalhesLivroComponent,
    CabecalhoComponent,
    CategoriasComponent,
    PesquisaComponent,
    CarrinhoComponent,
    CriarLivroComponent,
    CriarAutorComponent,
    CriarCategoriaComponent,
    CarouselComponent,
    AdminComponent,
    CheckoutComponent,
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    CarouselModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getPortuguesPaginatorIntl() },
    { provide: LOCALE_ID, useValue: 'pt' }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
