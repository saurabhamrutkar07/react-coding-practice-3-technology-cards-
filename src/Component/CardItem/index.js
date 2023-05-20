import "./index.css";

const CardItem = (props) => {
  const { cardDetails } = props;
  const { title, description, imgUrl, className } = cardDetails;
  return (
    <li className={`${className}`}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  );
};

export default CardItem;
