'use client';

import { useStudentsStore } from '@/store/students.store';
import { Box, Button, Flex, Text } from '@mantine/core';
import { modals } from '@mantine/modals';
import { IStudent } from '@/types/student.type';
import { useState } from 'react';
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose';

export const StudentsList = () => {
  const { students, removeStudent } = useStudentsStore();

  const [isHovered, setIsHovered] = useState<string | null>(null);

  const onRemoveStudent = (student: IStudent) => {
    modals.openConfirmModal({
      title: 'Removing Student',
      children: (
        <Text>{`Are you sure you want to remove the student ${student.firstName} ${student.lastName}?`}</Text>
      ),
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onConfirm: () => removeStudent(student.id),
    });
  };

  return (
    <>
      {students.map((student) => (
        <Flex
          key={student.firstName}
          h={28}
          mt="sm"
          justify="space-between"
          align="center"
          onMouseEnter={() => setIsHovered(student.firstName)}
          onMouseLeave={() => setIsHovered(null)}
        >
          <Box>{`${student.firstName} ${student.lastName}`}</Box>
          <Flex
            align="center"
            pt={3}
            justify="center"
            onClick={() => onRemoveStudent(student)}
            style={{
              transition: '0.2s',
              opacity: isHovered === student.firstName ? 1 : 0,
              cursor: 'pointer',
            }}
          >
            <AiOutlineClose size={18} />
          </Flex>
        </Flex>
      ))}
    </>
  );
};
