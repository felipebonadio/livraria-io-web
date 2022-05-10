import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class ViacepServiceService {

  constructor(private service: HttpClient) { }
  CEP: String = '';

  URL = 'viacep.com.br/ws/' + this.CEP +'/json/';

  buscarEndereco(cep: string) : Observable<Endereco>{
    this.CEP = cep;
    return this.service.get<Endereco>(this.URL);
  }
}
