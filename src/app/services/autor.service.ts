import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Autor } from '../model/autor';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http : HttpClient) { }

  buscarTodosAutores() : Observable<Autor[]>{
    return this.http.get<Autor[]>(environment.API_URL + '/autores');
  }
}
