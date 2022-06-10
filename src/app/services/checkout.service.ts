import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Endereco } from '../model/endereco';
import { Pessoa } from '../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http: HttpClient) { }

  efetuarComprar(pessoa: Pessoa):Observable<Pessoa>{
    return this.http.post<Pessoa>(environment.API_URL+'/pessoas', pessoa)
  }

  salvarEndereco(endereco: Endereco): Observable<Endereco>{
    return this.http.post<Endereco>(environment.API_URL+'/enderecos', endereco);
  }
}
