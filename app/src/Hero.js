import React from "react";
import hero from "./assets/runescape.png";
export default function Hero() {
  return (
    <div className="container-fluid heroContainer">
      <div className="container ">
        <div className="row heroRow justify-content-center">
          <div className="col align-self-center">
            <h1 className="heroHeader text-center">
              Get Linked on <br /> <strong>Rune</strong>Link
            </h1>
            <h5 className="fw-bold text-center">
              Your one stop shop for all things RuneScape. <br /> View
              GrandExchange prices, <br />
              see your stats displayed on your profile, <br />
              or post on the group finder to find people to play with
            </h5>
            <a href="#grandExchangeScroll" className="scroll">
              <div className="mouse justify-content-center">
                <div className="wheel"></div>
              </div>
              <div>
                <span className="m_scroll_arrows unu"></span>
                <span className="m_scroll_arrows doi"></span>
                <span className="m_scroll_arrows trei"></span>
              </div>
            </a>
            <h5 className="text-center mt-3">GrandExchange tracker</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
