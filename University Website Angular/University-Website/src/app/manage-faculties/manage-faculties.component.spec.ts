import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFacultiesComponent } from './manage-faculties.component';

describe('ManageFacultiesComponent', () => {
  let component: ManageFacultiesComponent;
  let fixture: ComponentFixture<ManageFacultiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageFacultiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageFacultiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
