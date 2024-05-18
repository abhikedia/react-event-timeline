import "./index.scss";

interface ICardIndex {
  index: string;
  className?: string;
}

const CardIndex = ({ index, className }: ICardIndex) => {
  const style = {
    "--number-content": `"${index}"`,
  } as React.CSSProperties;

  return (
    <div id="card-index" className={`card-index ${className}`}>
      <div className="card-index__internal" style={style} />
    </div>
  );
};

export default CardIndex;
