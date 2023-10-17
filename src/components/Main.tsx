import { useNavigate } from "react-router-dom";
import ListGroup from "./ListGroup";
//import Button from "./Button";
//import Alert from "./Alert";
import { useState } from "react";
import Button from "./Button";

function Main() {
  const navigate = useNavigate();
  const goToPictures = () => {
    // This will navigate to first component
    navigate("/pictures");
  };

  const [alertVisible, setAlertVisibility] = useState(false);
  let pictureItems = ["Tanzania", "India", "Norway", "Studio"];
  let sourceItems = ["Pages", "Videos", "Fonts"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className="App">
      <span className="header"> Synnøve Moss Nygård </span>

      <Button onClick={goToPictures}>
        <span className="heading">Pictures</span>
      </Button>

      {/* {alertVisible && (
      <Alert onClose={() => setAlertVisibility(false)}>Thank you</Alert>
    )}
    <Button onClick={() => setAlertVisibility(true)}>Press Me</Button> */}
    </div>
  );
}

export default Main;
