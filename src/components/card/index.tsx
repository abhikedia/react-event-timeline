import { ReactNode } from "react";
import CardIndex from "../card-index";
import "./index.scss";

interface Common {
  heading: string;
  description: string;
  align: string;
}
interface ICard1 extends Common {
  index: number;
  type?: "card1";
}
interface ICard2 extends Common {
  IndexNode: ReactNode;
  type?: "card2";
}

export type ICard = ICard1 | ICard2;

function toDoubleDigit(num: number): string {
  if (num < 10) {
    return `0${num}`;
  }
  return `${num}`;
}

const Card = ({ heading, description, type, align, ...rest }: ICard) => {
  return (
    <div id="card" className={align}>
      {type === "card1" ? (
        <CardIndex index={toDoubleDigit((rest as ICard1).index)} />
      ) : (
        (rest as ICard2).IndexNode
      )}
      <h2 className="card__heading">{heading}</h2>
      <p className="card__description">{description}</p>
    </div>
  );
};

export default Card;
