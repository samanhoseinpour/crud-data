import Link from 'next/link';

export default function SnippetNotFound() {
  return (
    <div className="flex-col justify-center items-center bg-gradient-to-r px-12 py-24 rounded-full text-center text-blue-900">
      <h1 className="text-xl font-bold  ">
        متأسفیم! اما نتوانستیم قطعه کدی را که به دنبال آن هستید، پیدا کنیم
      </h1>

      <div className="mt-10 font-bold">
        <Link href="/">بازگشت</Link>
      </div>
    </div>
  );
}
