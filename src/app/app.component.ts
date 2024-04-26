import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeResgistrationComponent } from './pages/employee-resgistration/employee-resgistration.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmployeeResgistrationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-jsonfiles';
}
