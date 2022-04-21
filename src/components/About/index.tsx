import React from 'react';
import AppNavigator from "src/components/Navigator";
import {TitleMain} from 'src/components/share/Titles';

const About = () => (
  <main>
    <AppNavigator />
    
    <section className="text-center w-full">
      <TitleMain type="h1">AboutPage</TitleMain>
      
      <p className="max-w-[480px] m-auto mt-[50px] text-lg">
        Привет! Я Алиев Артур и это частный микро проект для считывания биржевых котировок с бесплатных ограниченных источников.
      </p>
    </section>
  </main>
);

export default About;