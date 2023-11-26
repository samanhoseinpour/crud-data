import { notFound } from 'next/navigation';

import { db } from '@/db';
import { ShowSnippetsProps } from '@/types';
import { Button } from '@/components';

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
    <section>
      <div className="flex justify-around mt-10">
        <h3 className="text-[36px] font-bold">
          {snippet.title}
          <span className="font-extrabold mr-4">{snippet.id}#</span>
        </h3>
        <div className="flex justify-between gap-5">
          <Button type="submit" title="حذف" style="px-8 py-2" />
          <Button type="submit" title="ویرایش" style="px-8 py-2" />
        </div>
      </div>
      <pre
        className="my-8 p-3 border-gray-200 rounded bg-gray-100 h-auto"
        dir="ltr"
      >
        <code>{snippet.codeSnippet}</code>
      </pre>
    </section>
  );
}
