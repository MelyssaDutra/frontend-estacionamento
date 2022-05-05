import { Component, OnInit } from '@angular/core';
import { AdmService } from '../adm.service';

@Component({
  selector: 'app-consulta-adm',
  templateUrl: './consulta-adm.component.html',
  styleUrls: ['./consulta-adm.component.css']
})
export class ConsultaAdmComponent implements OnInit {
  usuarios: any
    

  constructor(private admService: AdmService) {
    this.admService.getAll().subscribe(x => this.usuarios=x)
   }

   gravar(dados: any){
     this.admService.gravar(dados).subscribe(x =>{ window.location.reload()})
   }

  ngOnInit(): void {
  }
  excluir(id:any) {
    this.admService.excluir(id).subscribe( x => {window.location.reload})
  }

}