"use client";
import LeaCall from '../app/leacall/page';
import LeaCalling from '../app/leacalling/page';
import Header from '../app/home/header';
import HeroSection from '../app/home/herosection';
import ProblemsPage from '../app/problemsolving/page'
import Page from '../app/features/page';
import CallPage from '../app/call/page';


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
