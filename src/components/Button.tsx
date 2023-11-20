import { ButtonProps } from '@/types';

export default function Button({ type, title, style }: ButtonProps) {
  return (
    <div className="bg-blue-950 text-blue-50 w-full mt-6 rounded-full text-center font-semibold p-2">
      <button type={type} className={`${style} p-2`}>
        {title}
      </button>
    </div>
  );
}
