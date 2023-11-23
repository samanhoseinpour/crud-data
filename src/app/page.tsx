import Link from 'next/link';

import { db } from '@/db';
import { Button } from '@/components';

export default async function HomePage() {
  const snippets = await db.snippets.findMany();

  const renderedSnippets = snippets.map(({ id, title }) => (
    <div
      className="flex justify-between my-6 p-6 bg-white border-r-2 border-blue-900 rounded-lg shadow"
      key={id}
    >
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
        {title}
      </h5>
      <Link
        href={`/snippets/${id}`}
        className="outline-none inline-flex items-center px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
      >
        مشاهده
        <svg
          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </Link>
    </div>
  ));

  return (
    <>
      <div className="flex flex-wrap justify-around items-center w-full py-4">
        <h3 className="text-blue-700 font-semibold text-[32px] text-center">
          ساخت قطعه کد جدید
        </h3>
        <Link href="/snippets/new">
          <Button type="button" title="+ساخت" style="px-6 py-2" />
        </Link>
      </div>
      {renderedSnippets};
    </>
  );
}
