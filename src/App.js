import Button from "./components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function App() {
  const handleClick = () => {
    console.log("click");
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
        <Button danger outline>
          <GoCloudDownload />
          Buy now
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide ads
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something
        </Button>
      </div>
    </div>
  );
}

export default App;