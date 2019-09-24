import { Component } from '@angular/core';
import { employeeService } from './emp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private emp: employeeService){}
  title = 'Anubhav';
  emp_id
  emp_name
  emp_dept
  myemp = {
    id: 1,
    name:'',
    dept:''

  }
  addEmployee(){
    this.myemp.id = this.emp_id
    this.myemp.name = this.emp_name
    this.myemp.dept = this.emp_dept
    this.emp.setEmployee(this.myemp)
    
  }
}
