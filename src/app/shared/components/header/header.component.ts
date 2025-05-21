import {Component, input, signal} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  sidebarOpen = false;

  titulo = input<string>();
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

}
