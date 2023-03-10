import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>click me!</Button>
      </div>
      <div>
        <Button danger outline>Buy now</Button>
      </div>
      <div>
        <Button warning>see deal</Button>
      </div>
      <div>
        <Button secondary outline>hide ads</Button>
      </div>
      <div>
        <Button primary rounded>something</Button>
      </div>
    </div>
  );
}

export default App;
