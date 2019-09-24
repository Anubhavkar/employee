import { Injectable } from '@angular/core';

@Injectable()
export class employeeService{
    empDetail = [
        {id :1,name:'abc',dept: 'CSE'},
        {id :2,name:'xyz',dept: 'ME'},
        {id :3,name:'def',dept: 'CE'}
    ]
    getEmployee(){
        return this.empDetail;
    }

setEmployee(emp){
    this.empDetail.push(emp)
}

}
