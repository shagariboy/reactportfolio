import { useAppContext } from "../appContext";
import { Element } from "react-scroll";
// Data
import { skillData, resume } from "../data";
// Components
import { Button, Col, Container, Row } from "react-bootstrap";
import { Title } from "./globalStyledComponents";
// Page Translation
import { useTranslation } from 'react-i18next';

export default function Skills() {
  const { theme } = useAppContext();
  const { t } = useTranslation();

  return (
    <Element name={"Skills"} id="skills">
      <section className="section">
        <Container className="text-center">
          <Title>
            <h2>{t('skills_title')}</h2>
            <div className="underline"></div>
          </Title>
          <Row className="mt-3 align-items-center">
            {skillData.map((skills) => {
              return (
                <Col xs={4} key={skills.id} className="my-md-5">
                  <figure>
                    {skills.skill}
                    <figcaption>{skills.name}</figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                R&eacute;sum&eacute;
              </Button>
            </a>
          )}
        </Container>
      </section>
    </Element>
  );
}
