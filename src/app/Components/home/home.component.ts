import { Component, OnInit } from '@angular/core';

type Task = {taskName: string, taskDes: string}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  taskName: string = '';
  taskDes: string = '';
  task: Task = {taskName: '', taskDes: ''};
  constructor() { }

  ngOnInit(): void {
  }
  onTipingName(event: any): void{
    this.taskName = event.target.value;
  }
  onTipingDes(event: any): void{
    this.taskDes = event.target.value;
  }
  onAddTask(){
    this.task.taskName = this.taskName
    this.task.taskDes = this.taskDes
    if(this.task != null){
      console.log('Ahora se puede guardar el objeto obtenido...')
    }
  }
}
