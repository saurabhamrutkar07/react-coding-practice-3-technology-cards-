import "./index.css";

export default function CardItem(props) {
  const { cardDetails, imgId } = props;
  const { title, description, imgUrl, className } = cardDetails;
  //   console.log(title, description, imgurl, className);
  console.log(imgUrl);

  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="d-flex flex-row justify-content-end  mt-5">
        <img src={imgUrl} alt={imgId} className="text-right" />
      </div>
    </li>
  );
}
