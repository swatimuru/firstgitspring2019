import { Component, OnInit } from '@angular/core';
import { HttpclientService, Employee } from '../service/httpclient.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[];
   
  constructor(
    private httpClientService:HttpclientService
  ) { }

  ngOnInit() {
    this.httpClientService.getEmployees().subscribe(
     response =>{this.employees=response;},
    );
  }

deleteEmployee(employee: Employee): void {
  // alert(" employee id :: " + employee.empId);

  this.httpClientService.deleteEmployee(employee)
    .subscribe( data => {
      this.employees = this.employees.filter(u => u !== employee);
    })
};
}
