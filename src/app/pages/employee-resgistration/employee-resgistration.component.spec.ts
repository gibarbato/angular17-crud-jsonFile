import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeResgistrationComponent } from './employee-resgistration.component';

describe('EmployeeResgistrationComponent', () => {
  let component: EmployeeResgistrationComponent;
  let fixture: ComponentFixture<EmployeeResgistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeResgistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeResgistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
