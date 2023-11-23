export default function SnippetLoading() {
  return (
    <div className="relative w-full px-12 py-24 bg-gray-100 border border-gray-200 rounded-full">
      <span className="bg-gray-100 text-xl font-semibold text-blue-900 text-center p-0.5 leading-none rounded-full px-2 absolute -translate-y-1/2 translate-x-1/2 right-1/2">
        در حال بارگذاری...
      </span>
    </div>
  );
}
