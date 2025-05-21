import {Component, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {HeaderComponent} from '../../shared/components/header/header.component';

@Component({
  selector: 'app-clientes',
    imports: [
        RouterLink,
        RouterLinkActive,
        HeaderComponent
    ],
  templateUrl: './clientes.component.html'
})
export class ClientesComponent {

  titulo = signal("Gestión de clientes")

}
