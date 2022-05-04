import React from "react";

import { Search } from "../../Components/Search";
import { Carousel } from "../../Components/Carousel";
import { CloseToYou } from "../../Components/CloseToYou";
import { TipDay } from "../../Components/TipDay";

import { Container } from "./style";

import { data } from "../../Mock/houses";

const Home = () => {
  return (
    <Container>
      <Search />

      <Carousel data={[data[0], data[1], data[2]]} />

      <CloseToYou data={[data[5], data[6], data[7], data[18]]}/>

      <TipDay data={data}/>
    </Container>
  );
};

export default Home;
