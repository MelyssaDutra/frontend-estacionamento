import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsuarioComponent} from './usuario/usuario.component';
import { TopoComponent } from './topo/topo.component';
import { ConsultaAdmComponent } from './consulta-adm/consulta-adm.component';

const routes: Routes = [

  {
    path: 'consultaadm',
    component: ConsultaAdmComponent
  },
  {
    path: 'usuario',
    component: UsuarioComponent
  },
  {
    path: 'topo',
    component: TopoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
