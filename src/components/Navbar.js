import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: url("https://www.creativefabrica.com/wp-content/uploads/2022/01/07/Black-White-Marble-texture-background-Graphics-23082833-1.jpg");
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  width: 100%;
  text-align: center;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  margin-left: -3rem;
  img {
    height: 10rem;
  }

  @media (max-width: 576px) {
    width: 100%;
    height: 100%;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: rgba(192, 137, 44, 0.838);
    }
  }
`;

const Navbar = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      <img
        alt=""
        src="https://www.restauranggalai.se/static/media/logo-black.6e38bff83766e20cd1ae5a1d632e5308.svg"
      />
      <Link to="/" onClick={() => setOpen(!open)}>
        Hem
      </Link>
      <Link to="Boka-bord" onClick={() => setOpen(!open)}>
        Boka bord
      </Link>
      <Link to="Meny" onClick={() => setOpen(!open)}>
        Meny
      </Link>
      <Link onClick={() => setOpen(!open)} to="About">
        Om
      </Link>
      <Link onClick={() => setOpen(!open)} to="Business">
        För företag
      </Link>
    </StyledMenu>
  );
};

export default Navbar;
