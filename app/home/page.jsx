"use client";
import LeaCall from '../leacall/page';
import LeaCalling from '../leacalling/page';
import Header from './header';
import HeroSection from './herosection';
import ProblemsPage from '../problemsolving/page'
import Page from '../features/page';
import CallPage from '../call/page';

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <LeaCall />
      <LeaCalling />
      <ProblemsPage />
      <Page />
      <CallPage />
    </>
  );
}
