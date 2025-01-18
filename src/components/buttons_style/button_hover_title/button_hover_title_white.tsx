import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Title() {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsHovered(prev => !prev); 
    }, isHovered ? 2000 : 500); 
  
    return () => clearInterval(intervalId);
  }, [isHovered]);
  
const navigate = useNavigate()
  return (
    <div onClick={() => navigate('/')}>
      <StyledWrapper>
        <button className={`button ${isHovered ? 'hovered' : ''}`} data-text="Awesome">
          <span className="actual-text">&nbsp;luxoflex&nbsp;</span>
          <span aria-hidden="true" className="hover-text">&nbsp;luxoflex&nbsp;</span>
        </button>
      </StyledWrapper>
    </div>
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

  /* this is the text, when you hover on button */
  .hover-text {
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

  /* Triggered hover effect when class is added */
  .button.hovered .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px white);
  }

  /* Optional, hover effect for manual hover */
  .button:hover .hover-text {
    width: 100%;
    filter: drop-shadow(0 0 23px white);
  }
`;
