import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { ImTrophy } from "react-icons/im";
import { MdWorkOutline } from "react-icons/md";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    updateNavbar(window.scrollY >= 20);
  }
  window.addEventListener("scroll", scrollHandler);

  const links = [
    { to: "/", icon: <AiOutlineHome />, label: "Home" },
    { to: "/about", icon: <AiOutlineUser />, label: "About" },
    { to: "/experience", icon: <MdWorkOutline />, label: "Experience" },
    { to: "/project", icon: <AiOutlineFundProjectionScreen />, label: "Projects" },
    { to: "/achievements", icon: <ImTrophy />, label: "Achievements" },
    { to: "/resume", icon: <CgFileDocument />, label: "Resume" },
  ];

  return (
    <Navbar expanded={expand} fixed="top" expand="md" className={navColour ? "sticky" : "navbar"}>
      <Container>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="ms-auto"
          onClick={() => updateExpanded(expand ? false : "expanded")}
        >
          <span></span><span></span><span></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            {links.map(({ to, icon, label }) => (
              <Nav.Item key={to}>
                <Nav.Link as={Link} to={to} onClick={() => updateExpanded(false)}>
                  {icon} {label}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Nav.Item className="fork-btn">
              <a href="https://github.com/Ranveer46/portfolio-new" target="_blank" rel="noreferrer" className="fork-btn-inner">
                <CgGitFork style={{ fontSize: "1.1em" }} />
                <AiFillStar style={{ fontSize: "1em" }} />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
