import ReactCardFlip from "react-card-flip";
import { CardProps } from "./Card.models";
const Card = (props: CardProps) => {
  const { children, flipped } = props;

  return Array.isArray(children) && children.length == 2 ? (
    <ReactCardFlip isFlipped={flipped}>
      <div
        className={`w-full border-slate-100 border-2 rounded-3xl drop-shadow-sm p-4`}
      >
        {children[0]}
      </div>
      <div
        className={`w-full border-slate-100 border-2 rounded-3xl drop-shadow-sm p-4`}
      >
        {children[1]}
      </div>
    </ReactCardFlip>
  ) : (
    <div
      className={`w-full border-slate-100 border-2 rounded-3xl drop-shadow-sm p-4`}
    >
      {children}
    </div>
  );
};

export default Card;
