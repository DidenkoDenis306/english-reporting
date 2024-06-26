'use client';

import { Button, Drawer, Group, useMantineColorScheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { LessonForm, StudentForm } from '@repo/src/components/organisms';
import React from 'react';

export function ColorSchemeToggle() {
  const { setColorScheme } = useMantineColorScheme();

  const [openedStudent, { open: openStudent, close: closeStudent }] =
    useDisclosure(false);
  const [openedLesson, { open: openLesson, close: closeLesson }] =
    useDisclosure(false);

  const onOpenStudentModal = () => {
    modals.open({
      title: 'Add Student',
      children: <StudentForm />,
    });
  };

  return (
    <Group justify="flex-end" w="100%">
      <Button onClick={openLesson}>+ Add Lesson</Button>
      <Button onClick={openStudent}>+ Add Student</Button>

      <Drawer
        opened={openedLesson}
        onClose={closeLesson}
        position="right"
        title={'Add Lesson'}
      >
        <LessonForm />
      </Drawer>

      <Drawer
        opened={openedStudent}
        onClose={closeStudent}
        position="right"
        title={'Add Student'}
      >
        <StudentForm />
      </Drawer>
      {/*<Button onClick={() => setColorScheme('light')}>Light</Button>*/}
      {/*<Button onClick={() => setColorScheme('dark')}>Dark</Button>*/}
      {/*<Button onClick={() => setColorScheme('auto')}>Auto</Button>*/}
    </Group>
  );
}
