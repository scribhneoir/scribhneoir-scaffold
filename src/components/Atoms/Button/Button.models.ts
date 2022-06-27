export type ButtonProps = {
  ariaLabel?: string;
  primary?: boolean;
  icon?: boolean;
  light?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
};
