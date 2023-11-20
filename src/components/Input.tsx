import { InputProps } from '@/types';

export default function Input({ type, style, title, placeholder }: InputProps) {
  return (
    <label>
      {title}
      <input
        type={type}
        className={`text-center border-b-2 p-4 border-blue-900 font-semibold outline-none rounded-xl ${style}`}
        placeholder={placeholder}
      />
    </label>
  );
}
