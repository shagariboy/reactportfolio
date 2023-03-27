import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
import ContactForm from "./ContactForm";
// Page Translation
import { useTranslation } from 'react-i18next';

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
`;

export default function Contact() {
  const { t } = useTranslation();

  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>{t('contact_heading')}</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container>
          <ContactForm />
        </Container>
      </StyledSection>
    </Element>
  );
}
