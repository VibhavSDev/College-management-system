export interface StudentReq {
  firstName: string;
  lastName?: string;
  gender: string | null;
  dob?: string;
  rollNo: string;
  email?: string;
  phone?: string;

  currentSemester: number;
  admissionYear: number;
  status: string | null;

  address?: string;

  enrollmentNumber?: string | null;
  admissionType?: string | null;
  bloodGroup?: string | null;
  profileImageUrl?: string;

  departmentId: number;
  courseId: number;
}