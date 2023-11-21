import { notFound } from 'next/navigation';

import { db } from '@/db';
import { ShowSnippetsProps } from '@/types';

export default async function ShowSnippets({ params }: ShowSnippetsProps) {
  const snippet = await db.snippets.findFirst({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <h1>{snippet.title}</h1>
      <p>{snippet.codeSnippet}</p>
    </div>
  );
}
