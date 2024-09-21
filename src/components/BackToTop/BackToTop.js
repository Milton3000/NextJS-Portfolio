import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

const Button = styled.button`
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: #0070f3;
  color: white;
  border: none;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: background 0.3s;

  &:hover {
    background: #005bb5;
  }
`;

const BackToTop = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Button show={show} onClick={scrollToTop}>
      <IoIosArrowUp size="24px" />
    </Button>
  );
};

export default BackToTop;
