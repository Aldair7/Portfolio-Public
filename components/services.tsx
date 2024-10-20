"use client";

import React from "react";
import { Tile, TileWrapper, TileContent, TileBackground } from "./tile"

const Services = () => {
  return (
    <TileWrapper numOfPages={3} >
      <TileBackground></TileBackground>
      <TileContent><Tile page={0} renderContent={({ progress }) => (<span> {progress}</span>)}></Tile></TileContent>
      <TileContent>bar</TileContent>
      <TileContent>ba2</TileContent>
    </TileWrapper >
  )
}

export default Services
