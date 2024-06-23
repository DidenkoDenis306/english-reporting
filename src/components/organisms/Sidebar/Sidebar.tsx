'use client';

import { AppShell, Stack, Text } from '@mantine/core';
import TimeDisplay from '@repo/src/components/moleculs/TimeDisplay/TimeDisplay';
import { StudentsList } from '@repo/src/components/organisms';

export const Sidebar = () => {
  return (
    <AppShell.Navbar px="md">
      <Stack justify="space-between" h="100%" pb={12}>
        <StudentsList />

        <TimeDisplay />
      </Stack>
    </AppShell.Navbar>
  );
};
