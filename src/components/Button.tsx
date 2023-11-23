import { ButtonProps } from '@/types';

export default function Button({ type, title, style }: ButtonProps) {
  return (
    <div className="flex justify-center items-center bg-blue-950 text-blue-50 rounded-full text-center font-semibold cursor-pointer">
      <button type={type} className={`max-w-[470px] ${style}`}>
        {title}
      </button>
    </div>
  );
}
