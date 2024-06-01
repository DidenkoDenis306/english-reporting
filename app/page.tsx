'use client';

import { AppShell, Burger, Flex, Group, Skeleton, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { StudentForm } from '@/components/StudentForm/StudentForm';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';
import { StudentsList } from '@/components/StudentsList/StudentsList';
import { LessonForm } from '@/components/LessonForm/LessonForm';
import { DateInput } from '@mantine/dates';
import '@mantine/dates/styles.css';

export default function BasicAppShell() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
      padding="md"
    >
      <AppShell.Header>
        <Flex h="100%" px="md" wrap="nowrap" align="center">
          <Text
            style={{ fontSize: 32, whiteSpace: 'nowrap' }}
            fw="bold"
            variant="gradient"
            component="span"
            gradient={{ from: 'pink', to: 'yellow' }}
          >
            English Tutoring Reports
          </Text>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <ColorSchemeToggle />
        </Flex>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Text size="xl" fw="bold" component="span">
          Students List
        </Text>
        <StudentsList />
      </AppShell.Navbar>
      <AppShell.Main>
        <StudentForm />

        <LessonForm />
      </AppShell.Main>
    </AppShell>
  );
}
