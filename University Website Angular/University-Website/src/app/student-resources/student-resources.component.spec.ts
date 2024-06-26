import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentResourcesComponent } from './student-resources.component';

describe('StudentResourcesComponent', () => {
  let component: StudentResourcesComponent;
  let fixture: ComponentFixture<StudentResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
