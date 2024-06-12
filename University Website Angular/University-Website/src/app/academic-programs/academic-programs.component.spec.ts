import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicProgramsComponent } from './academic-programs.component';

describe('AcademicProgramsComponent', () => {
  let component: AcademicProgramsComponent;
  let fixture: ComponentFixture<AcademicProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcademicProgramsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcademicProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
