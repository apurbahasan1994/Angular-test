import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
const tasks_array = ["Seo", "Link Building", "Angular functionality improve"];

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  taskFrom = new FormGroup({
    task: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern(/[A-Z]+$/i)])
  })
  tasks = Array.from(tasks_array)

  constructor() {

  }

  ngOnInit(): void {
  }
  onFormSubmit() {
    if (!this.taskFrom.valid) {
      return
    }
    console.log(this.taskFrom.value)
    const newtask: string = this.taskFrom.get('task')?.value
    this.tasks.push(newtask)
    tasks_array.push(newtask)

    this.taskFrom.reset();
  }

}
