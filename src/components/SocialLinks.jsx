import React from "react";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
import styled from "styled-components";
// Data

// Icons
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const StyledSocialLinks = styled.div`
  a {
    margin: 0 1rem;
  }
`;

export default function SocialLinks() {
  const { html_url } = useSelector(selectData);

  return (
    <StyledSocialLinks>
      <a
        href={html_url}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaGithub />
      </a>
      <a
        href={"https://www.linkedin.com/in/nnamdi-ezeh-2658031ba/"}
        aria-label="Check out my GitHub profile."
        className="link-icons"
      >
        <FaLinkedinIn />
      </a>
    </StyledSocialLinks>
  );
}
