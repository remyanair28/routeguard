import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees: any;
  errorMsg: any;

  constructor(private empService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.empService.getEmployees().subscribe(
      (data) => this.employees = data,
      (error) => this.errorMsg = error
    )
  }

  onSelect(employees: any){
    console.log(employees)
    this.router.navigate(['/view/', employees._id]);
  }

}
