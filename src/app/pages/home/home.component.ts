import { Component, signal } from '@angular/core';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tasks = signal<Task[]>([
    {
      id: Date.now(),
      title: "Crear Proyecto",
      completed: false
    },
    {
      id: Date.now(),
      title: "Algebra",
      completed: false
    },
    {
      id: Date.now(),
      title: "modificar Estructura de Proyecto",
      completed: false
    },    
  ]);

  newTasksCtrol = new FormControl('', {
    nonNullable: true,
    validators: [
      Validators.required,
      Validators.minLength(1),
    ]
  });

 

  changeHandler() {
    if (this.newTasksCtrol.valid) {
      const value = this.newTasksCtrol.value.trim();
      if (value !== '') {
        this.addTask(value);
        this.newTasksCtrol.setValue('');        
      }
    }
  }

  addTask(title: string){
    const newTask: Task = {
      id: Date.now(),
      title: title,
      completed: false
    }
    this.tasks.update( (tasks) => [...tasks, newTask] );
  }

  deleteTask(index: number){
    this.tasks.update( (tasks)=> tasks.filter( (task, posIndex)=> posIndex !== index));
  }

  updateTask(index: number){
    this.tasks.update( (state)=> {
      return state.map( (task, posIndex)=>{
        if (posIndex === index) {
          return {
            ...task,
            completed: !task.completed
          }
        }
        return task;
      })
    });
  }
}
