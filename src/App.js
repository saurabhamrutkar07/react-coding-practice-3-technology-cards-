import "./App.css";

import CardItem from "./Component/CardItem";

const cardsList = [
  {
    id: 1,
    title: "Data Scientist",
    description:
      "Data scientists gather and analyze large sets of structured and unstructured data",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/data-scientist-img.png",
    className: "card-1",
  },
  {
    id: 2,
    title: "IOT Developer",
    description:
      "IoT Developers are professionals who can develop, manage, and monitor IoT devices.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/iot-developer-img.png",
    className: "card-2",
  },
  {
    id: 3,
    title: "VR Developer",
    description:
      "A VR developer creates completely new digital environments that people can see.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/vr-developer-img.png",
    className: "card-3",
  },
  {
    id: 4,
    title: "ML Engineer",
    description:
      "Machine learning engineers feed data into models defined by data scientists.",
    imgUrl: "https://assets.ccbp.in/frontend/react-js/ml-engineer-img.png",
    className: "card-4",
  },
];

function App() {
  return (
    <div className="App p-5">
      <h1>Learn 4.0 Technologies</h1>
      <p>
        Get trained by alumni of IITs and top companies like Amazon, Microsoft,{" "}
        Intel, Nvidia, Qualcomm, etc. Learn directly from professionals involved
        in product development
      </p>
      <ul>
        <div className="card-container">
          <li>
            <CardItem
              key={cardsList[0].id}
              cardDetails={cardsList[0]}
              imgId={cardsList[0].id}
            />
          </li>
          <li>
            <CardItem
              key={cardsList[1].id}
              cardDetails={cardsList[1]}
              imgId={cardsList[1].id}
            />
          </li>
        </div>

        <div className="card-container">
          <li>
            <CardItem
              key={cardsList[2].id}
              cardDetails={cardsList[2]}
              imgId={cardsList[2].id}
            />
          </li>
          <li>
            <CardItem
              key={cardsList[3].id}
              cardDetails={cardsList[3]}
              imgId={cardsList[3].id}
            />
          </li>
        </div>
      </ul>
    </div>
  );
}

export default App;
