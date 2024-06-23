'use client';

import { Box, Flex, NavLink, Skeleton, Stack } from '@mantine/core';
import { studentsService } from '@repo/services';
import { IconGauge, IconUsers } from '@tabler/icons-react';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export const StudentsList = () => {
  const { id } = useParams();

  const {
    data: students,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['students'],
    queryFn: studentsService.getStudents,
  });

  // const onRemoveStudent = (student: IStudent) => {
  //   modals.openConfirmModal({
  //     title: 'Removing Student',
  //     children: (
  //       <Text>{`Are you sure you want to remove the student ${student.firstName} ${student.lastName}?`}</Text>
  //     ),
  //     labels: { confirm: 'Confirm', cancel: 'Cancel' },
  //     onConfirm: () => removeStudent(student.id),
  //   });
  // };

  return (
    <Stack
      gap="sm"
      style={{ borderLeft: '1px solid lightgray', marginTop: 15, padding: 0 }}
    >
      {isLoading && (
        <Stack gap="sm">
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
        </Stack>
      )}
      <NavLink
        href="#required-for-focus"
        label="Students"
        leftSection={<IconUsers size="1rem" stroke={1.5} />}
        childrenOffset={28}
      >
        {students &&
          students.data.map((student) => (
            // <Link
            //   style={{
            //     textDecoration: 'none',
            //     color: 'black',
            //   }}
            //   href={`/students/${student.id}`}
            // >
            //   <Flex
            //     key={student.id}
            //     h={20}
            //     px={8}
            //     py={20}
            //     justify="space-between"
            //     align="center"
            //     style={{
            //       boxSizing: 'border-box',
            //       backgroundColor:
            //         Number(id) === student.id ? '#e7f5ff' : 'transparent',
            //       color: Number(id) === student.id ? '#1971c2' : 'black',
            //       borderLeft:
            //         Number(id) === student.id ? '5px solid #339af0' : 'none',
            //       borderTopRightRadius: 5,
            //       borderBottomRightRadius: 5,
            //     }}
            //   >
            //     {`${student.firstName} ${student.lastName}`}
            //   </Flex>
            // </Link>

            <NavLink
              href={`/students/${student.id}`}
              label={`${student.firstName} ${student.lastName}`}
              component={Link}
            />
          ))}
      </NavLink>
    </Stack>
  );
};
