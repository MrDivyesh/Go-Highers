import React from 'react';
import PortfolioSection from '../components/PortfolioSection';
import drinkSvg from '../assets/portfolio/drink.svg';
import matchitSvg from '../assets/portfolio/matchit .svg';
import metamaskSvg from '../assets/portfolio/metamask.svg';
import myvillaSvg from '../assets/portfolio/myvilla.svg';
import savetheDogSvg from '../assets/portfolio/savethedog.svg';
import simpleSvg from '../assets/portfolio/simple.svg';
import wemeventSvg from '../assets/portfolio/wemevent.svg';
import wiskeySvg from '../assets/portfolio/wiskey.svg';
import xanasummitSvg from '../assets/portfolio/xanasummit.svg';

const svgImages = [
  { src: drinkSvg, alt: 'Drink Project', caption: 'Drink Branding' },
  { src: simpleSvg, alt: 'Simple Project', caption: 'Simple Branding' },
  { src: wiskeySvg, alt: 'Wiskey Project', caption: 'Wiskey Branding' },
  { src: wemeventSvg, alt: 'WeMe Event Project', caption: 'WeMe Event Platform' },
  { src: metamaskSvg, alt: 'Metamask Project', caption: 'Metamask Integration' },
  { src: myvillaSvg, alt: 'MyVilla Project', caption: 'MyVilla Platform' },
  { src: matchitSvg, alt: 'MatchIt Project', caption: 'MatchIt App' },
  { src: savetheDogSvg, alt: 'Save The Dog Project', caption: 'Save The Dog Game' },
  { src: xanasummitSvg, alt: 'Xanasummit Project', caption: 'Xanasummit Event' },
];

const Portfolio = () => (
  <div>
    <h1 style={{
      textAlign: 'center',
      fontWeight: 700,
      fontSize: '3rem',
      margin: '60px 0 40px 0',
      letterSpacing: '1px'
    }}>
      Our Portfolio
    </h1>

    <PortfolioSection
      label="EXPLORE ALGENIX PORTFOLIO"
      title="Latest trends and insights from IT"
      images={svgImages.slice(0, 3)}
    />

    <PortfolioSection
      images={svgImages.slice(3, 6)}
    />

    <PortfolioSection
      images={svgImages.slice(6, 9)}
    />
  </div>
);

export default Portfolio; 