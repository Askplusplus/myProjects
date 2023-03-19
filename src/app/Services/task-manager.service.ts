import { Injectable } from '@angular/core';
import {Observable, take} from "rxjs";



type Task = {No: number, Name: string, Description: string}

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  taskArrays: Task[] = [];
  taskResultsArray: Task[] = []
  // taskManager: Task = {taskName: '', taskDes: ''};
  taskToString: string = '';
  taskResult: any;
  taskSize: number = 0;
  obs = new Observable<Task[]>((observer) => {
    setInterval(() => {
      this.taskResult = localStorage.getItem('task');
      if(this.taskResult !== null){
        this.taskToString = this.taskResult;
        this.taskResultsArray = JSON.parse(this.taskToString)
        observer.next(this.taskResultsArray);
      }
    })
  }).pipe((
    take(1)
  ));

  constructor(){
  }

  getTask(): Observable<Task[]>{
    return this.obs;
  }

  getTaskLength(): number{
    console.log(this.taskToString);
    return this.taskSize;
  }

  setInLocalStorage(item: Task[]): void{
    localStorage.setItem('task',JSON.stringify(item));
  }

  setTask(currentTask: Task): void{
    this.taskArrays.push({
      No: currentTask.No,
      Name: currentTask.Name,
      Description: currentTask.Description
    })
    this.setInLocalStorage(this.taskArrays);
  }
}
