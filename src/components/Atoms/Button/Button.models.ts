export type ButtonProps = {
  primary?: boolean;
  icon?: boolean;
  light?: boolean;
  children?: React.ReactNode;
  onClick: () => void;
};
