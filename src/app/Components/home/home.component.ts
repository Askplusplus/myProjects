import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TaskManagerService } from "../../Services/task-manager.service";

type Task = {No: number,Name: string, Description: string}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  task: Task = {No: 0,Name: '', Description: ''};

  constructor(private snackBar: MatSnackBar,
              private taskService: TaskManagerService) {
  }

  ngOnInit(): void {
    this.onTakeLength();
  }

  onTakeLength(){
    this.task.No = this.taskService.getTaskLength();
    console.log(this.task.No)
  }

  onAddTask(Input: HTMLInputElement, TextArea: HTMLTextAreaElement) {
    this.task.Name= Input.value;
    this.task.Description = TextArea.value;
    this.task.No = this.task.No + 1;
    if (this.task.Name != '' && this.task.Description != '') {
      console.log(this.task)
      this.taskService.setTask(this.task)
      Input.value = '';
      TextArea.value = '';
      this.snackBar.open('Task Added', '', {
        duration: 2 * 1000
      })
    }
  }
}
