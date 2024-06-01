'use client';

import { Button, Group, Text, useMantineColorScheme } from '@mantine/core';
import { modals } from '@mantine/modals';
import { StudentForm } from '@/components/StudentForm/StudentForm';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  const onOpenStudentModal = () => {
    modals.openConfirmModal({
      title: 'Add Student',
      children: <StudentForm />,
    });
  };

  return (
    <Group justify="flex-end" w="100%">
      <Button onClick={() => setColorScheme('light')}>+ Add Lesson</Button>
      <Button onClick={onOpenStudentModal}>+ Add Student</Button>

      <Button onClick={() => setColorScheme('light')}>Light</Button>
      <Button onClick={() => setColorScheme('dark')}>Dark</Button>
      <Button onClick={() => setColorScheme('auto')}>Auto</Button>
    </Group>
  );
}
