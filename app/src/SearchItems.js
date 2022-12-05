import React from "react";

export default function SearchItems({
  searchItem,
  getSearchData,
  setSearchOrList,
}) {
  console.log(searchItem);
  function handleInput(e) {
    if (e.key === "Enter") {
      setSearchOrList("Search");
      getSearchData(e.target.value);
    }
  }
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-6">
          <input
            type="search"
            className="form-control form-control-dark text-bg-dark mt-4 mb-2"
            placeholder="Search GE Items"
            aria-label="Search"
            onKeyDown={(e) => handleInput(e)}
          />
        </div>
      </div>
      <div className="row text-center">
        <div className="col">
          <h2>
            {searchItem.name}{" "}
            <span>
              <img src={searchItem.icon_large}></img>
            </span>
          </h2>
        </div>
        <div className="row text-center">
          <div className="col">
            <p>{searchItem.description}</p>
          </div>
        </div>
        <div className="container itemPriceContainer w-75">
          <div className="row">
            <div className="col-4 text-start">
              <h3>Current Guide Price</h3>
            </div>
            <div className="col-8 text-end">
              <h3>
                {searchItem.current?.price}
                <span className="bigCoin">
                  <img src="https://www.runescape.com/img/rsp777/grand_exchange/coin.png"></img>
                </span>{" "}
              </h3>
            </div>
          </div>
          <div className="row alternating">
            <div className="col-4 text-start">
              <p>Today's Change</p>
            </div>
            <div className="col-8 text-end">
              <p>
                {searchItem.today?.price}
                <span className="smallCoins">
                  <img src="https://www.runescape.com/img/rsp777/grand_exchange/coins.gif"></img>
                </span>
                <span className="change">
                  {searchItem.today?.trend === "positive" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/positive.gif"></img>
                  )}
                  {searchItem.today?.trend === "negative" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/negative.gif"></img>
                  )}
                  {searchItem.today?.trend === "neutral" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/neutral.gif"></img>
                  )}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-start">
              <p>1 Month Change</p>
            </div>
            <div className="col-8 text-end">
              <p>
                {searchItem.day30?.change}
                <span className="smallCoins">
                  <img src="https://www.runescape.com/img/rsp777/grand_exchange/coins.gif"></img>
                </span>
                <span className="change">
                  {searchItem.day30?.trend === "positive" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/positive.gif"></img>
                  )}
                  {searchItem.day30?.trend === "negative" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/negative.gif"></img>
                  )}
                  {searchItem.day30?.trend === "neutral" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/neutral.gif"></img>
                  )}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="row alternating">
            <div className="col-4 text-start">
              <p>3 Month Change</p>
            </div>
            <div className="col-8 text-end">
              <p>
                {searchItem.day90?.change}
                <span className="smallCoins">
                  <img src="https://www.runescape.com/img/rsp777/grand_exchange/coins.gif"></img>
                </span>
                <span className="change">
                  {searchItem.day90?.trend === "positive" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/positive.gif"></img>
                  )}
                  {searchItem.day90?.trend === "negative" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/negative.gif"></img>
                  )}
                  {searchItem.day90?.trend === "neutral" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/neutral.gif"></img>
                  )}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-start">
              <p>6 Month Change</p>
            </div>
            <div className="col-8 text-end">
              <p>
                {searchItem.day180?.change}
                <span className="smallCoins">
                  <img src="https://www.runescape.com/img/rsp777/grand_exchange/coins.gif"></img>
                </span>
                <span className="change">
                  {searchItem.day180?.trend === "positive" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/positive.gif"></img>
                  )}
                  {searchItem.day180?.trend === "negative" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/negative.gif"></img>
                  )}
                  {searchItem.day180?.trend === "neutral" && (
                    <img src="https://www.runescape.com/img/rsp777/grand_exchange/neutral.gif"></img>
                  )}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
