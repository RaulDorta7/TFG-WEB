import { Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {ClientesComponent} from './pages/clientes/clientes.component';
import {ProyectosComponent} from './pages/proyectos/proyectos.component';
import {FinanzasComponent} from './pages/finanzas/finanzas.component';
import {DetallesProyectoComponent} from './pages/proyectos/detalles-proyecto/detalles-proyecto.component';
import { DetallesClienteComponent } from './pages/clientes/detalles-cliente/detalles-cliente.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'finanzas', component: FinanzasComponent },
  { path: 'detalles-proyecto', component: DetallesProyectoComponent },
  { path: 'detalles-cliente', component: DetallesClienteComponent },
  { path: '**', redirectTo: 'home' },
];
