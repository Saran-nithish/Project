import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyDirectoryComponent } from './faculty-directory.component';

describe('FacultyDirectoryComponent', () => {
  let component: FacultyDirectoryComponent;
  let fixture: ComponentFixture<FacultyDirectoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyDirectoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyDirectoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
