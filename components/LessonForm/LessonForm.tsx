'use client';

import { useForm } from '@mantine/form';
import { Button, Select, Stack, TextInput } from '@mantine/core';
import { useStudentsStore } from '@/store/students.store';
import { DateInput } from '@mantine/dates';

export const LessonForm = () => {
  const { students } = useStudentsStore();

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = form.onSubmit((values) => {
    // addStudent(values);

    form.reset();
  });

  return (
    <Stack
      p={12}
      w={400}
      style={{
        border: '2px solid lightblue',
        margin: '40px auto',
        borderRadius: '10px',
      }}
    >
      <form onSubmit={onSubmit}>
        <Stack gap="md">
          <Select
            label="Your favorite library"
            placeholder="Pick value"
            data={students.map(
              (student) => `${student.firstName} ${student.lastName}`,
            )}
          />

          <DateInput
            valueFormat="DD.MM.YYYY"
            label="Date input"
            placeholder="Date input"
          />

          <Button type="submit">Add lesson</Button>
        </Stack>
      </form>
    </Stack>
  );
};
