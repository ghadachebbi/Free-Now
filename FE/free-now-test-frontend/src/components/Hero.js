import React from "react";

export default function Hero({ children, hero }) {
  return (
    <header data-testid="heroStyle" className={hero}>
      {children}
    </header>
  );
}
Hero.defaultProps = {
  hero: "defaultHero",
};
