import React, { useState, useEffect } from 'react';
import { Container, Group, Paper, Text, Title } from '@mantine/core';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const TimeDisplay = () => {
  const [kyivTime, setKyivTime] = useState(dayjs().tz('Europe/Kyiv'));
  const [chicagoTime, setChicagoTime] = useState(dayjs().tz('America/Chicago'));

  useEffect(() => {
    const interval = setInterval(() => {
      setKyivTime(dayjs().tz('Europe/Kyiv'));
      setChicagoTime(dayjs().tz('America/Chicago'));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  console.log('ren');

  return (
    <Container>
      <Group justify="space-between">
        <Paper shadow="xs" p="md" withBorder>
          <Text fw={500} size="md">
            Kyiv
          </Text>
          <Text ta="center" size="lg">
            {kyivTime.format('HH:mm')}
          </Text>
        </Paper>
        <Paper shadow="xs" p="md" withBorder>
          <Text fw={500} size="md">
            Chicago
          </Text>
          <Text ta="center" size="lg">
            {chicagoTime.format('HH:mm')}
          </Text>
        </Paper>
      </Group>
    </Container>
  );
};

export default TimeDisplay;
