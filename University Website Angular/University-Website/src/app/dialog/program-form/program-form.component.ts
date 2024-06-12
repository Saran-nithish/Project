import { Component, Inject, NgModule } from '@angular/core';
import { Program } from '../../interfaces/program';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatToolbar } from '@angular/material/toolbar';
import { MatCardActions, MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-program-form',
  standalone: true,
  imports: [CommonModule,FormsModule,MatToolbar,MatCardModule,MatCardActions,MatFormField,MatInputModule],
  templateUrl: './program-form.component.html',
  styleUrl: './program-form.component.css'
})
export class ProgramFormComponent {
  program: Program = {
    name: '', type: '', description: '', admissionRequirements: '', curriculumDetails: '', facultyProfiles: '',
    programId: 0
  };
  mode: 'add' | 'edit' | undefined;

  constructor(
    public dialogRef: MatDialogRef<ProgramFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.mode = this.data.mode;

    if (this.mode === 'edit') {
      this.program = { ...this.data.program };
    }
  }

  onSubmit() {
    this.dialogRef.close(this.program);
  }

  onCancel() {
    this.dialogRef.close();
  }
}
