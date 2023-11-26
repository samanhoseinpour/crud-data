import { redirect } from 'next/navigation';

import { db } from '@/db';
import { Input, Button } from '@/components';

export default function CreateSnippets() {
  const createCodeSnippets = async (formData: FormData) => {
    //  server action
    'use server';

    // get title and code snippets from form
    const title = formData.get('title') as string;
    const codeSnippet = formData.get('codeSnippet') as string;

    // create data into database and log the data
    const snippets = await db.snippets.create({
      data: {
        title,
        codeSnippet,
      },
    });

    // redirect to root
    redirect('/');
  };

  return (
    <section className="mt-12">
      <h3 className="text-blue-700 font-semibold text-[32px] text-center">
        +ساخت قطعه کد جدید
      </h3>

      <form
        className="flex flex-col justify-center w-full gap-3 px-[72px] mt-10"
        action={createCodeSnippets}
      >
        <Input type="text" placeholder="عنوان" style="w-full" title="title" />

        <label htmlFor="codeSnippet" className="p-3">
          <textarea
            name="codeSnippet"
            id="codeSnippet"
            cols={30}
            rows={10}
            className="w-full text-left border-b-2 p-6 border-blue-900 font-semibold outline-none rounded-xl overflow-auto"
          />
        </label>

        <Button type="submit" title="ذخیره" style="py-4" />
      </form>
    </section>
  );
}
