import React from "react";
import { Row, Col, Card, CardTitle, Slide, Slider } from "react-materialize";

import logo_client from "../img/Logo/logo.png";

import slide_01 from "../img/Slides/slide_01.png";
import slide_02 from "../img/Slides/slide_02.png";
import slide_03 from "../img/Slides/slide_03.png";

import man_phone from "../img/Cards/man_phone.jpg";
import "../css/Home.css";

export default class Home extends React.Component {
  render() {
    return (
      <div className="home-body">
        <Row>
          <Col className="background-header" s={12}>
            <div className="home-text slogan">
              <h1>SUA PLATAFORMA DE CONTEÚDO AUTOMOTIVO</h1>
            </div>
          </Col>
        </Row>
        <div className="content-clients-area">
          <Row>
            <Col s={12}>
              <img
                width="140"
                height="60"
                src={logo_client}
                alt="logo-client"
              />
            </Col>
          </Row>
        </div>
        <Slider>
          <Slide title="This is our big Tagline!" placement="left">
            <img
              width="280"
              height="280"
              src={slide_01}
              alt="Maquina de Alinhamento"
            />
          </Slide>
          <Slide
            // src="http://lorempixel.com/580/250/nature/2"
            title="Left aligned Caption"
            placement="left"
          >
            Here's our small slogan.
          </Slide>
          <Slide
            // src="http://lorempixel.com/580/250/nature/3"
            title="Right aligned Caption"
            placement="left"
          >
            Here's our small slogan.
          </Slide>
        </Slider>
        <Row>
          <Col s={12}>
            <div className="home-text welcome">
              <h3>Sobre a GooMec</h3>
              <p>
                For a simpler card with less markup, try using a card panel
                which just has padding and a shadow effect
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <div className="home-text content">
              <h3>Produtos em Destaque</h3>
            </div>
          </Col>
          <Col m={4} s={12}>
            <Card
              header={<CardTitle reveal image={man_phone} waves="light" />}
              title="Todos os lugares"
              reveal={
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              }
            />
          </Col>
          <Col m={4} s={12}>
            <Card
              header={<CardTitle reveal image={man_phone} waves="light" />}
              title="Todos os lugares"
              reveal={
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              }
            />
          </Col>
          <Col m={4} s={12}>
            <Card
              header={<CardTitle reveal image={man_phone} waves="light" />}
              title="Todos os lugares"
              reveal={
                <p>
                  Here is some more information about this product that is only
                  revealed once clicked on.
                </p>
              }
            />
          </Col>
        </Row>
        <Row>
          <Col s={12}>
            <div className="home-text article">
              <h3>Artigos</h3>
              <p>
                For a simpler card with less markup, try using a card panel
                which just has padding and a shadow effect
              </p>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
