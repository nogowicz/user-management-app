import { InputHTMLAttributes } from 'react';

export default function CustomInput(
  props: InputHTMLAttributes<HTMLInputElement>
) {
  return (
    <input
      className="
      text-columnLightBg border p-2 rounded-md bg-secondary border-secondary focus:ring-primary focus:border-primary focus:ring-1 focus:outline-none        
        "
      {...props}
    />
  );
}
