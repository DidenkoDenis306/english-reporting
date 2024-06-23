import { http } from '@repo/http';
import { IStudentResponse } from '@repo/src/services';
import { AxiosResponse } from 'axios';

class StudentsService {
  public getStudents(): Promise<AxiosResponse<IStudentResponse[]>> {
    return http
      .get<AxiosResponse<IStudentResponse[]>>(`/students`)
      .then((result) => result);
  }

  public getStudent(id: number): Promise<AxiosResponse<IStudentResponse>> {
    return http
      .get<AxiosResponse<IStudentResponse>>(`/students/${id}`)
      .then((result) => result);
  }
}

export const studentsService = new StudentsService();
