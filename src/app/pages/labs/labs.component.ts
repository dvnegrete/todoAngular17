import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {

  title= "Hola";
  
  tasks = signal([
    "Primera Tarea",
    "Segunda Tarea",
    "Hola tu  Tarea",
    "Adios a tu  Tarea",
  ]);
  name= signal("dvnegrete");

  disabled= false;

  handlerClick() {
    alert("ME diste!!")
  }

  handlerDoubleClick() {
    alert("Me diste dos veces!!")
  }

  changeHandler(e: Event){
    console.log((e));
  }

  keyDownHandler(e: KeyboardEvent){
    const input = e.target as HTMLInputElement
    console.log(input.value)
  }

  changeName(event: Event){
    const input = event.target as HTMLInputElement;
    this.name.set(input.value);
  }

  colorControl = new FormControl();

  constructor(){
    this.colorControl.valueChanges.subscribe(value=>{
      console.log(value);
      
    })
  }

}
