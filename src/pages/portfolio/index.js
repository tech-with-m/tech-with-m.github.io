import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

const YouTubeEmbed = ({ videoId, description }) => (
  <div className="video-container">
    <iframe
      width="100%"
      height="400"
      src={`https://www.youtube.com/embed/${videoId}`}
      title={description}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
    <div className="content">
      <p>{description}</p>
    </div>
  </div>
);

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">My Videos</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5">
          {dataportfolio.map((data, i) => (
            <YouTubeEmbed
              key={i}
              videoId={data.videoId}
              description={data.description}
            />
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
