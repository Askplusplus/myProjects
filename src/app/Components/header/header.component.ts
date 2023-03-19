import { Component, OnInit} from '@angular/core';
import { TaskManagerService } from "../../Services/task-manager.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  taskSize: number = 0;
  constructor(private taskService: TaskManagerService) {
   }

  ngOnInit(): void {
  }

}
