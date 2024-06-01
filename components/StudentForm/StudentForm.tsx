'use client';

import { useForm } from '@mantine/form';
import { Button, Stack, TextInput } from '@mantine/core';
import { useStudentsStore } from '@/store/students.store';
import { faker } from '@faker-js/faker';

export const StudentForm = () => {
  const { addStudent } = useStudentsStore();

  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = form.onSubmit((values) => {
    addStudent({
      id: faker.number.int({ min: 1, max: 295729568 }),
      ...values,
    });

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
          <TextInput
            withAsterisk
            label="First Name"
            placeholder="First Name"
            key={form.key('firstName')}
            {...form.getInputProps('firstName')}
          />

          <TextInput
            withAsterisk
            label="Last Name"
            placeholder="Last Name"
            key={form.key('lastName')}
            {...form.getInputProps('lastName')}
          />

          <Button type="submit">Add student</Button>
        </Stack>
      </form>
    </Stack>
  );
};
