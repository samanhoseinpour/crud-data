import Link from 'next/link';

export default function SnippetNotFound() {
  return (
    <div className="flex-col justify-center items-center bg-gray-100 px-12 py-24 rounded-full text-center text-blue-900">
      <h1 className="text-xl font-bold  ">
        متأسفیم! اما نتوانستیم قطعه کدی را که به دنبال آن هستید، پیدا کنیم
      </h1>

      <div className="mt-10 font-bold ">
        <Link
          href="/"
          className="border-1 rounded-full bg-blue-950 text-white px-4 py-2"
        >
          بازگشت
        </Link>
      </div>
    </div>
  );
}
