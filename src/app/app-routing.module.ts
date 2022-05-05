import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './components/carrinho/carrinho.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { CriarAutorComponent } from './components/admin/criar-autor/criar-autor.component';
import { CriarCategoriaComponent } from './components/admin/criar-categoria/criar-categoria.component';
import { CriarLivroComponent } from './components/admin/criar-livro/criar-livro.component';
import { DetalhesLivroComponent } from './components/detalhes-livro/detalhes-livro.component';
import { PesquisaComponent } from './components/pesquisa/pesquisa.component';
import { HomeComponent } from './home/home.component';
import { PaginaErroComponent } from './pagina-erro/pagina-erro.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'livro/:id', component: DetalhesLivroComponent },
  { path: 'categoria/:nome', component: CategoriasComponent },
  { path: 'pesquisa/:nome', component: PesquisaComponent },
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'criarlivro', component: CriarLivroComponent },
  { path: 'criarautor', component: CriarAutorComponent },
  { path: 'criarcategoria', component: CriarCategoriaComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: PaginaErroComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
