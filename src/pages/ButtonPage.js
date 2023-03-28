import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {
    console.log("clicked the button");
  };
  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline className="mb-5" onClick={handleClick}>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning className="mb-5" onClick={handleClick}>
          <GoDatabase />
          See deal!
        </Button>
      </div>
      <div>
        <Button secondary outline className="mb-5" onClick={handleClick}>
          Hide ads
        </Button>
      </div>
      <div>
        <Button primary rounded className="mb-5" onClick={handleClick}>
          Something
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
