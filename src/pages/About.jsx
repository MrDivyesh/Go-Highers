import React from 'react';
import AboutSection from '../components/AboutPageSection';
import FeatureListSection from '../components/FeatureListSection';
import SimpleMarqueeSection from '../components/SimpleMarqueeSection';
import BrandElevateSection from '../components/BrandElevateSection';
import ReviewSliderSection from '../components/ReviewSliderSection';
import ContactCtaSection from '../components/ContactCtaSection';
import TeamSection from '../components/TeamSection';

const About = () => (
  <>
    <AboutSection />
    <FeatureListSection/>
    <SimpleMarqueeSection/>
    <BrandElevateSection />
    <ReviewSliderSection />
    <ContactCtaSection />
    <TeamSection />
  </>
);

export default About;