import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employeeview',
  templateUrl: './employeeview.component.html',
  styleUrls: ['./employeeview.component.css']
})
export class EmployeeviewComponent implements OnInit {

  public employeeId: any;
  public employee: any;
  public errorMsg: any;

  constructor(private empService: EmployeeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      //console.log(params.get('id'))
      let id = params.get('id');
      console.log(id)
      this.employeeId = id;
      console.log(this.employeeId);
      this.empService.getEmployeesById(this.employeeId).subscribe(
        (data) => {
          this.employee = data; 
          console.log(data); 
        },
        (error) => {this.errorMsg = error; console.log(error); }
        // () => {this.router.navigate(['/employees']);}
      );
    });
    
  }

}
