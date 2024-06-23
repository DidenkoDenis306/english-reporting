'use client';

import { Accordion, Button, Flex, Select, Stack, Title } from '@mantine/core';
import { studentsService } from '@repo/services';
import { TipTapEditor } from '@repo/src/components/organisms/TipTapEditor/TipTapEditor';
import { formatMonthDayYear } from '@repo/src/utils/date';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';

export default function Page() {
  const { id } = useParams();

  const {
    data: student,
    error,
    isLoading,
  } = useQuery({
    queryKey: ['student'],
    queryFn: () => studentsService.getStudent(Number(id)),
  });

  console.log('st', student?.data);

  return (
    <>
      {student?.data && (
        <Stack>
          <Flex align="center" justify="space-between">
            <Title w={500}>
              {student?.data.firstName} {student?.data.lastName}
            </Title>

            <Flex gap="sm">
              <Select
                h={35}
                placeholder="Pick value"
                data={['This month', 'This week', 'This Year']}
              />

              <Button variant="light" h={35}>
                Apply
              </Button>

              <Button variant="outline" h={35}>
                Reset
              </Button>
            </Flex>

            <Button variant="outline" color="red" h={35}>
              Delete Student
            </Button>
          </Flex>

          <Stack>
            <Accordion radius="sm" variant="filled">
              {student.data.lessons &&
                student.data.lessons.map((lesson: any) => (
                  <Accordion.Item key={lesson.id} value={lesson.lessonDate}>
                    <Accordion.Control>
                      {`${formatMonthDayYear(lesson.lessonDate)} ${lesson.lessonNumber}th lesson`}
                    </Accordion.Control>
                    <Accordion.Panel>
                      <TipTapEditor student={student.data} lesson={lesson} />
                    </Accordion.Panel>
                  </Accordion.Item>
                ))}
            </Accordion>
          </Stack>
        </Stack>
      )}
    </>
  );
}
