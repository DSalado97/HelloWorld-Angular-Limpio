import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MiComponenteComponent } from "./mi-componente/mi-componente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MiComponenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HelloWorld';
  nombre = 'Daniel Salado';
}
