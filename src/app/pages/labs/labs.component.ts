import { Component } from '@angular/core';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  title= "Hola"
  tasks = [
    "Priemra Tarea",
    "Segunda TArea",
    "Hola tu  TArea",
  ]
}
