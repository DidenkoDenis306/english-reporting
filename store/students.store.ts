import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { IStudent } from '@/types/student.type';

interface StudentsState {
  students: IStudent[];
  addStudent: (newStudent: IStudent) => void;
  removeStudent: (id: number) => void;
}

export const useStudentsStore = create<StudentsState>()(
  persist(
    (set, get) => ({
      students: [],
      addStudent: (newStudent: IStudent) => {
        const currentStudents = get().students;

        currentStudents.push(newStudent);

        set({ students: currentStudents });
      },
      removeStudent: (id: number) => {
        const currentStudents = get().students;
        const updatedStudents = currentStudents.filter((student) => {
          return student.id !== id;
        });
        set({ students: updatedStudents });
      },
    }),

    {
      name: 'students-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
