import { Component } from '@angular/core';
import { RouterOutlet} from '@angular/router';
import {SideBarComponent} from './shared/components/side-bar/side-bar.component';
import {HeaderComponent} from './shared/components/header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
