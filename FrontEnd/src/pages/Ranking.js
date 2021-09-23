import React from "react";

import Navbar from "../components/NavBar.js";
import Card from "../components/RankingCards.js";

export default function Ranking() {
  return (
    <div>
      <Navbar />
      <Card className="targeta" />
    </div>
  );
}
