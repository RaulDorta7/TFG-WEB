import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderComponent} from '../../shared/components/header/header.component';

@Component({
  selector: 'app-proyectos',
    imports: [
        RouterLink,
        RouterLinkActive,
        HeaderComponent
    ],
  templateUrl: './proyectos.component.html'
})
export class ProyectosComponent {

  titulo = signal("Gestión de proyectos")
}
