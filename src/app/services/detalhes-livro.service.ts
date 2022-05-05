import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livro } from '../model/livro';

@Injectable({
  providedIn: 'root'
})
export class DetalhesLivroService {

  constructor(private http: HttpClient) {}

  find(id: number): Observable<Livro> {
    return this.http.get<Livro>(environment.API_URL + '/livros/' + id);
  }
}
