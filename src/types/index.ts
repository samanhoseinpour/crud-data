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

export type ShowSnippetsProps = {
  params: {
    id: string;
  };
};

export type CardProps = {
  id?: string;
  title: string;
  codeSnippet: string;
};
