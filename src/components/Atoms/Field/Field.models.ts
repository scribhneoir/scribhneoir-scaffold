export type FieldProps = {
  ariaLabel?: string;
  error?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
  onChange: (value: string) => void;
};
