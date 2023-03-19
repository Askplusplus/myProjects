import { Component, OnDestroy, OnInit} from '@angular/core';
import { TaskManagerService } from "../../Services/task-manager.service";

// export interface Task{
//   Name: string,
//   Description: string
// }

type Task = {No: number, Name: string, Description: string}

const ELEMENT_DATA: Task[] = [
  // {taskName: 'Hola', taskDes: 'Hola Mundo'}
];

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  dataSource = ELEMENT_DATA;
  mySubscription: any;
  columnsToDisplay: string[] = ['No','Name', 'Description'];

  constructor(private taskServices: TaskManagerService){
  }

  ngOnInit(): void {
   this.onLoadData();
  }
  ngOnDestroy() {
    this.onFinish();
  }

  onLoadData(){
    this.mySubscription = this.taskServices.getTask().subscribe((item:Task[]) => {
      this.dataSource = item;
      console.log(this.dataSource)
    })
  }
  onFinish(){
    this.mySubscription.unsubscribe();
  }
}
