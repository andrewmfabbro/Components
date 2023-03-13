import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
        id:'jl343',
      label: "Can I use React on a project?",
      content: "You can use React on any project you like!",
    },
    {
        id: "32lewkrj",
      label: "Can I use JavaScript?",
      content: "You can use JavaScript on any project you like!",
    },
    {
        id:"3j42lte",
      label: "Can I use CSS?",
      content: "You can use CSS on any project you like!",
    },
  ];

  return <Accordion items={items}/>;
}

export default App;
