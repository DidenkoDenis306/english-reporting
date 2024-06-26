'use client';

import { Button, PasswordInput, Stack, Text, TextInput } from '@mantine/core';
import { FormErrors, useForm } from '@mantine/form';
import { authService } from '@repo/services';
import { loginValidator } from '@repo/validation';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';

export function LoginForm() {
  const { push } = useRouter();

  const form = useForm({
    initialValues: {
      login: '',
      password: '',
    },
    validate: loginValidator,
  });

  const { mutate: login, isPending } = useMutation({
    mutationFn: authService.login,
    onSuccess: () => {
      push('/dashboard');
    },
    onError: (error: AxiosError) => {
      if (error.response && error.response.status === 500) {
        form.setErrors({ form: 'Unexpected error occurred' });
      }

      if (error.response && error.response.status !== 500) {
        form.setErrors(error.response.data as FormErrors);
      }
    },
  });

  const onSubmit = form.onSubmit((values) => {
    login(values);
  });

  return (
    <form onSubmit={onSubmit}>
      <Stack gap="md">
        <TextInput
          label="Login"
          placeholder="Your login"
          size="md"
          key={form.key('login')}
          {...form.getInputProps('login')}
        />

        <PasswordInput
          label="Password"
          placeholder="Your password"
          size="md"
          key={form.key('password')}
          {...form.getInputProps('password')}
        />

        {form.errors.form && (
          <Text hidden={!form.errors.form} c="red">
            {form.errors.form}
          </Text>
        )}

        <Button
          fullWidth
          mt="xl"
          size="md"
          variant="gradient"
          gradient={{ from: 'blue', to: 'pink' }}
          type="submit"
          disabled={!form.isDirty()}
          loading={isPending}
        >
          Login
        </Button>
      </Stack>
    </form>
  );
}
