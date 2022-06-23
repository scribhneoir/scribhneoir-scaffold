import { CardProps } from "./Card.models";
const Card = (props: CardProps) => {
  const { children } = props;

  return (
    <div
      className={`w-full border-slate-100 border-2 rounded-3xl drop-shadow-sm p-4`}
    >
      {children}
    </div>
  );
};

export default Card;
