import { Component } from '@angular/core';
import { Program } from '../interfaces/program';
import { UniversityService } from '../Services/university.service';
import { MatDialog } from '@angular/material/dialog';
import { ProgramFormComponent } from '../dialog/program-form/program-form.component';
import { MatToolbar} from '@angular/material/toolbar';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-manage-programs',
  standalone: true,
  imports: [MatToolbar,MatCardActions,MatCardModule,CommonModule,RouterLink],
  templateUrl: './manage-programs.component.html',
  styleUrl: './manage-programs.component.css'
})
export class ManageProgramsComponent {
  programs: Program[] = [];

  constructor(private programService: UniversityService, private dialog: MatDialog,private router: Router,  private userService: UserService) {}

  ngOnInit(): void {
    this.loadPrograms();
  }

  logout(): void {
    this.userService.logout();
    this.router.navigate(['/login']);
  }



  loadPrograms() {
    this.programService.getPrograms().subscribe({
      next:programs => {
        this.programs = programs;
      },
     error: error => {
        console.log('Error loading programs: ', error);
      }
  });
  }

  addProgram() {
    const dialogRef = this.dialog.open(ProgramFormComponent, {
      width: '600px',
      data: { mode: 'add' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.programService.createProgram(result).subscribe({
         next: newProgram => {
            this.programs.push(newProgram);
          },
          error:error => {
            console.error('Error adding program: ', error);
          }
       } );
      }
    });
  }

  editProgram(program: Program) {
    const dialogRef = this.dialog.open(ProgramFormComponent, {
      width: '600px',
      data: { mode: 'edit', program: program }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.programService.updateProgram(result).subscribe(
          updatedProgram => {
            const index = this.programs.findIndex(p => p.programId === updatedProgram.programId);
            if (index !== -1) {
              this.programs[index] = updatedProgram;
            }
          },
          error => {
            console.error('Error updating program: ', error);
          }
        );
      }
    });
  }

  deleteProgram(programId: number) {
    if (confirm('Are you sure you want to delete this program?')) {
      this.programService.deleteProgram(programId).subscribe({
       next: () => {
          this.programs = this.programs.filter(p => p.programId !== programId);
        },
       error: error => {
          console.error('Error deleting program: ', error);
        }
    });
    }
  }
}
