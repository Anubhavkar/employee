import { Component, OnInit } from '@angular/core';
import { employeeService } from '../emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor(private employee: employeeService) { }

  ngOnInit() {
  
  }
  empList = [
    {id :1,name:'abc',dept: 'CSE'},
    {id :2,name:'xyz',dept: 'ME'},
    {id :3,name:'def',dept: 'CE'}
  ]

}
