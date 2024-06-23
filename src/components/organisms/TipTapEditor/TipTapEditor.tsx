'use client';

import { IStudent } from '@repo/types';
import { formatDate, getOrdinalSuffix } from '@repo/utils';
import React, { FC } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import Heading from '@tiptap/extension-heading';
import { Box, Button } from '@mantine/core';

interface Props {
  student: IStudent;
  lesson: any;
}

export const TipTapEditor: FC<Props> = ({ student, lesson }) => {
  const documentName = `${student.firstName} ${student?.lastName}, ${getOrdinalSuffix(lesson.lessonNumber)} lesson, ${formatDate(lesson.lessonDate)}`;

  const editor = useEditor({
    extensions: [
      StarterKit.configure({}),
      Heading.configure({ levels: [1, 2, 3] }),
    ],
    content: `
    <h3>${documentName}</h3>
           <p></p>
              <p>adversity - негаразди</p>
              <p>benevolence - доброзичливість</p>
              <p>candid - відвертий</p>
              <p>debunk - викривати</p>
              <p>enigmatic - загадковий</p>
              <p>frivolous - легковажний</p>
              <p>hindsight - ретроспективний погляд</p>
              <p>intrinsic - властивий</p>
              <p>jubilant - радісний</p>
              <p>luminous - сяючий</p>
    `,
  });

  const exportToDocx = async () => {
    if (!editor) return;

    // @ts-ignore
    const paragraphs = editor.getJSON().content.map((block) => {
      if (block.type === 'heading') {
        const text =
          block.content?.map((textBlock) => textBlock.text).join('') || '';

        return new Paragraph({
          children: [
            new TextRun({
              text: text,
              size: 48,
            }),
          ],
        });
      } else if (block.type === 'paragraph') {
        const text =
          block.content?.map((textBlock) => textBlock.text).join('') || '';
        return new Paragraph({
          children: [
            new TextRun({
              text: text,
              size: 28,
            }),
          ],
          spacing: {
            line: 360,
          },
        });
      } else {
        return new Paragraph('');
      }
    });

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: paragraphs,
        },
      ],
    });

    const buffer = await Packer.toBuffer(doc);
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
    saveAs(blob, `${documentName}.docx`);
  };

  return (
    <Box>
      <Box
        style={{
          border: '2px solid #339af0',
          borderRadius: 5,
          padding: 12,
          marginBottom: 16,
        }}
      >
        <EditorContent editor={editor} />
        <style>
          {`
            .ProseMirror-focused {
              outline: none;
              box-shadow: none;
            }
        `}
        </style>
      </Box>
      <Button onClick={exportToDocx}>Export to .docx</Button>
    </Box>
  );
};
