import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../service/userService.service';
import { Observable } from 'rxjs';
import { MatTableModule } from '@angular/material/table';

export interface IUsers {
  id: number;
  name: string;
  username: string;
  email: string;
}
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  standalone: true,
  imports: [MatTableModule],
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  constructor(private userService: UserServiceService) {}

  displayedColumns: string[] = ['id', 'name', 'username', 'email'];
  users!: IUsers[];

  ngOnInit() {
    this.userService.getUsers().subscribe((x) => console.log(x));
  }

  // "id": 2,
  //   "name": "Ervin Howell",
  //   "username": "Antonette",
  //   "email": "Shanna@melissa.tv"
}
