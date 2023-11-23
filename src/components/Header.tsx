import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-blue-900">
      <Link href="/">
        <h1 className="text-[36px] text-center font-bold text-blue-900 py-4">
          قطعه کد
        </h1>
      </Link>
    </header>
  );
}
