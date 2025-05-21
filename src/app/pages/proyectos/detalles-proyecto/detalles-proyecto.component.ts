import {Component, signal} from '@angular/core';
import {HeaderComponent} from '../../../shared/components/header/header.component';

@Component({
  selector: 'app-detalles-proyecto',
  imports: [HeaderComponent],
  templateUrl: './detalles-proyecto.component.html'
})
export class DetallesProyectoComponent {


  titulo = signal("Detalles del proyecto")
}
