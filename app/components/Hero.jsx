"use client";
import React from "react";
import {
  Hero_Grad,
  // Hero_Text,
  Hero_wrapper,
  Hero_Title,
} from "../styles-components/Hero";
import { Container, Logo } from "../styles-components/global";

export default function Hero() {
  return (
    <>
      <Hero_wrapper>
        <Hero_Grad>
          <div>
            <Hero_Title>NOMINATE AN ATTENDEE FOR</Hero_Title>
            <Logo src="/novcom_logo.png" />
            {/* <Hero_Text>Africa</Hero_Text>
          <Hero_Text>01-03 OCT 2024</Hero_Text> */}
            <Container>
              Nominate a peer or colleague to attend NOVACOM and earn NOVA
              points.
            </Container>
            <Container>You have 4 nominations left.</Container>
          </div>
        </Hero_Grad>
      </Hero_wrapper>
    </>
  );
}
