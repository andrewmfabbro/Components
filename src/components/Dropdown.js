import { useState } from "react";

function Dropdown({ options }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((currentIsOpen) => !currentIsOpen); //functional stops stale state
  };

  const handleOptionClick = (option) => {
    //CLOSE DROPDOWN
    setIsOpen(false);
    //WHAT OPTION DID THE USER CLICK?
    console.log(option);
  };

  const renderedOptions = options.map((option) => {
    return (
      <div onClick={()=>handleOptionClick(option)} key={option.value}>
        {option.label}
      </div>
    );
  });

  return (
    <div>
      <div onClick={handleClick}>Select...</div>
      {isOpen && <div>{renderedOptions}</div>}
    </div>
  );
}

export default Dropdown;
