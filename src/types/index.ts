export type InputProps = {
  type: string;
  style?: string;
  title?: string;
  placeholder?: string;
};

export type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  title: string;
  style?: string;
};
