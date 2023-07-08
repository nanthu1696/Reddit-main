import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const CustomSelect = () => {
  let location = useLocation();
  let path = location.pathname;
  const user = path.split("/");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    <span>
      <box-icon name="home-alt"></box-icon>
      <p>Home</p>
    </span>
  );

  const options = [
    <span>
      <box-icon name="home-alt"></box-icon>
      <p>Home</p>
    </span>,
    <span>
      <box-icon type="solid" name="right-top-arrow-circle"></box-icon>
      <p>Popular</p>
    </span>,
    <span>
      <box-icon type="solid" name="tone" rotate="90"></box-icon>
      <p>All</p>
    </span>,
    <span>
      <box-icon name="plus"></box-icon>
      <p>Create</p>
    </span>
  ];
  useEffect(() => {
    if (user[2] === "popular") {
      setSelectedOption(
        <span>
          <box-icon type="solid" name="right-top-arrow-circle"></box-icon>
          <p>Popular</p>
        </span>
      );
    }
    if (user[2] === "create") {
      setSelectedOption(
        <span>
          <box-icon name="plus"></box-icon>
          <p>Create</p>
        </span>
      );
    }
  }, [path]);
  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    let el = option.props.children;
    let opt = el[1].props.children;
    if (opt === "Home") navigate(`/${user[1]}`);
    else {
      navigate(`/${user[1]}/${opt.toLowerCase()}`);
    }
  };

  return (
    <div className="custom-select">
      <div className="select-header" onClick={toggleOptions}>
        <span className="selected-option">{selectedOption}</span>
        <span className={`arrow ${isOpen ? "open" : ""}`}></span>
      </div>
      {isOpen && (
        <div className="select-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="option"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
