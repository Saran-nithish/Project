import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageAdmissionsComponent } from './manage-admissions.component';

describe('ManageAdmissionsComponent', () => {
  let component: ManageAdmissionsComponent;
  let fixture: ComponentFixture<ManageAdmissionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageAdmissionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManageAdmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
