import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "@/assets/luxoflex.png";

export default function Title() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsActive((prev) => !prev); 
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  return (
    <Link to="/" className="animate-slideinright flex">
      <img src={logo} className="h-10" />

      <StyledWrapper>
        <button
          className={`button ${isActive ? "active" : ""}`}
          data-text="Awesome"
        >
          <span className="actual-text">&nbsp;luxoflex&nbsp;</span>
          <span aria-hidden="true" className="animated-text">
            &nbsp;luxoflex&nbsp;
          </span>
        </button>
      </StyledWrapper>
    </Link>
  );
}

const StyledWrapper = styled.div`
  /* === removing default button style ===*/
  .button {
    margin: 0;
    height: auto;
    background: transparent;
    padding: 0;
    border: none;
    cursor: pointer;
    position: relative;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px rgba(255, 255, 255, 0.6);
    font-size: 2em;
    letter-spacing: 3px;
    font-family: "Arial";
  }

  .animated-text {
    position: absolute;
    box-sizing: border-box;
    content: attr(data-text);
    color: white;
    width: 0%;
    inset: 0;
    border-right: 6px solid white;
    overflow: hidden;
    transition: 0.5s;
    -webkit-text-stroke: 1px white;
  }

  /* Active state for animation */
  .button.active .animated-text {
    width: 100%;
    filter: drop-shadow(0 0 23px white);
  }
`;
