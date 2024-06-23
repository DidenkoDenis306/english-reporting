import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { ReactQueryProvider } from '@repo/providers';
import React from 'react';
import { theme } from '../theme';
import '@mantine/dates/styles.css';

export const metadata = {
  title: 'English Tutoring Reports',
  description: 'English Tutoring Reports',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <ReactQueryProvider>
          <MantineProvider theme={theme}>
            <ModalsProvider>{children}</ModalsProvider>
          </MantineProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
