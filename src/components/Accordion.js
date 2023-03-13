import { useState } from "react";

function Accordion({ items }) {
    const [expandedIndex, setExpanded] = useState(0);

  const renderedItems = items?.map((item, index) => {
    const isExpanded = index === expandedIndex;

    console.log(isExpanded);

    const content = isExpanded && <div>{item.content}</div>

    return (
      <div key={item.id}>
        <div>{item.label}</div>
        {content}
      </div>
    );
  });
  return <div>
    {renderedItems}
  </div>;
}

export default Accordion;
