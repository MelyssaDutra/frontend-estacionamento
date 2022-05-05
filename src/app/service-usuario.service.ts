import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsuarioService {

  constructor(private http: HttpClient) { }

  salvar(data:any){
    let url= 'http://localhost:8081/usuarios';
    return this.http.post(url,data);
  }
  consultarTodos(){
    let url = 'http://localhost:8081/usuarios';
    return this.http.get(url);
  }
}
