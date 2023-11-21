import { ButtonProps } from '@/types';

export default function Button({ type, title, style }: ButtonProps) {
  return (
    <div className="flex justify-center items-center bg-blue-950 text-blue-50 mt-6 rounded-full text-center font-semibold p-2 cursor-pointer">
      <button type={type} className={`p-2 max-w-[470px] ${style}`}>
        {title}
      </button>
    </div>
  );
}
