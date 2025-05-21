import {Component, signal} from '@angular/core';
import {HeaderComponent} from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-detalles-cliente',
  imports: [HeaderComponent],
  templateUrl: './detalles-cliente.component.html'
})
export class DetallesClienteComponent {

  titulo = signal("Detalle del cliente")


}
