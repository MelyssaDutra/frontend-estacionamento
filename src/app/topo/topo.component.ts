import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css']
})
export class TopoComponent implements OnInit {

  vagas = [
    {
      "ID": 0,
      "nome": "VG0",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 1,
      "nome": "VG1",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 2,
      "nome": "VG2",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 3,
      "nome": "VG3",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 4,
      "nome": "VG4",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 5,
      "nome": "VG5",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 6,
      "nome": "VG6",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 7,
      "nome": "VG7",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 8,
      "nome": "VG8",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 9,
      "nome": "VG9",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 10,
      "nome": "VG10",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 11,
      "nome": "VG11",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 12,
      "nome": "VG12",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 13,
      "nome": "VG13",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 14,
      "nome": "VG14",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 15,
      "nome": "VG15",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 16,
      "nome": "VG16",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 17,
      "nome": "VG17",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 18,
      "nome": "VG18",
      "tipo": 0,
      "ocupado": false
    },
    {
      "ID": 19,
      "nome": "VG19",
      "tipo": 0,
      "ocupado": false
    }
 
  ];

  constructor() { }

  ngOnInit(): void {
    //this.gerarVagar();
  }

  gerarVagar() {

    for(let i = 0; i<20; i++){
      console.log(`{"ID":${i}, "nome":"VG${i}", "tipo":0, "ocupado": false},`)
    }
  }

  

}
