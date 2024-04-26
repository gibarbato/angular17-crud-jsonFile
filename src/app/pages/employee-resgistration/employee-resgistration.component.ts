import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-resgistration',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-resgistration.component.html',
  styleUrl: './employee-resgistration.component.css'
})
export class EmployeeResgistrationComponent implements OnInit {

  departments: any[] = [];
  employeeList: any[] = [];
  isListView: boolean = true;
  employeeObject: any = {
    "firstName": "",
    "lastName": "",
    "department": "",
    "departmentId": "0",
    "gender": "",
    "email": "",
    "phoneNo": ""
  };
  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {
    this.loadDepartments();
    this.loadEmployees();
  }

  loadDepartments() {
    this.http.get("assets/departments.json").subscribe((res: any) => {
      this.departments = res.data;
    })
  }

  loadEmployees() {
    this.http.get("assets/getEmployee.json").subscribe((res: any) => {

      this.employeeList = res.data;
    })
  }

  onCreateEmp() {

    // this.http.post("assets/postEmployee.json", this.employeeObject).subscribe((res: any) => {
    //   alert(res.message)
    // })
    this.http.get("assets/postEmployee.json").subscribe((res: any) => {
      alert(res.message);
      this.loadEmployees();
    })
  }

  onEdit(item: any) {
    debugger;
    this.employeeObject = item;
    this.isListView = false;
  }

  onDelete(item: any) {
    debugger;
    this.employeeObject = item;
    this.isListView = false;
  }
  
}
