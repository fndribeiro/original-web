import { Pet } from './../model/pet.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private url = 'http://localhost:8080/pet';

  constructor(private http: HttpClient) { }

  getPetlist(): Observable<any> {
    return this.http.get(this.url);
  }

  getPet(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`)
  }

  criarPet(pet: Pet): Observable<any> {
    return this.http.post(this.url, pet);
  }

  atualizarPet(id: number, value: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  removerPet(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

}
