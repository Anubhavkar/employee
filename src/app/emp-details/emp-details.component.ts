import { Component, OnInit } from '@angular/core';
import { employeeService } from '../emp.service';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private emp: employeeService) { }

  ngOnInit(){
    this.empDetail=this.emp.getEmployee()

    }
   empDetail = []

}
