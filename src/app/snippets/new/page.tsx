import { Input, Button } from '@/components';

export default function CreateSnippets() {
  return (
    <section>
      <h3 className="max-w-[350px] text-slate-800 mr-8 font-semibold text-[32px] text-center">
        +ساخت قطعه کد جدید
      </h3>

      <form className="flex flex-col justify-center max-w-[470px] gap-3 px-[72px] mt-10">
        <Input type="text" placeholder="عنوان" style="w-full" title="title" />

        <label htmlFor="codeSnippet">
          <textarea
            name="codeSnippet"
            id="codeSnippet"
            cols={30}
            rows={10}
            placeholder="قطعه کد خود را جایگذاری کنید"
            className="w-full text-center border-b-2 p-4 border-blue-900 font-semibold outline-none rounded-xl"
          />
        </label>

        <Button type="submit" title="ذخیره" style="w-full" />
      </form>
    </section>
  );
}
