import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../../../services/student/student.service';
import { StudentRes } from '../../../models/response_dto/student-res';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css'],
  standalone: false
})
export class StudentDetailsComponent implements OnInit {
  student: StudentRes | null = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) {
      this.error = 'Invalid student id';
      this.loading = false;
      return;
    }

    this.studentService.getStudent(id).subscribe({
      next: (res) => {
        this.student = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading student details', err);
        this.error = err?.error?.message || 'Unable to load student details';
        this.loading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/view/students']);
  }
}
