"use client";

import React from "react";
import { Tile, TileWrapper, TileContent, TileBackground } from "./tile"
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from "./service";

const Services = () => {
  return (
    <TileWrapper numOfPages={3} >
      <TileBackground><WorkBackground /></TileBackground>
      <TileContent>
        <Tile page={0} renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft>
              <span className="text-9xl">What we do</span>
            </WorkLeft>
            <WorkRight progress={progress}></WorkRight>
          </WorkContainer>
        )}>
        </Tile>
        <Tile page={1} renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft>
              <span className="text-9xl">and also</span>
            </WorkLeft>
            <WorkRight progress={progress}></WorkRight>

          </WorkContainer>)}>
        </Tile>
        <Tile page={2} renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft>
              <span className="text-9xl">and</span>
            </WorkLeft>
            <WorkRight progress={progress}></WorkRight>

          </WorkContainer>)}>
        </Tile>

      </TileContent >

    </TileWrapper >
  )
}

export default Services
