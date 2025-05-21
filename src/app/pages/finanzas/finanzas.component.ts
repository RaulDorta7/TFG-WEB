import {Component, signal} from '@angular/core';
import {HeaderComponent} from '../../shared/components/header/header.component';

@Component({
  selector: 'app-finanzas',
  imports: [HeaderComponent],
  templateUrl: './finanzas.component.html'
})
export class FinanzasComponent{

  titulo = signal("Finanzas")

}
