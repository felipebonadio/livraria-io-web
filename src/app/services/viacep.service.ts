import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Endereco } from '../model/endereco';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  constructor(private service: HttpClient) { }


  buscarEndereco(cep: string) : Observable<Endereco>{
    return this.service.get<Endereco>('http://viacep.com.br/ws/'+ cep+'/json/');
  }
}
