import React from 'react';
import AppNavigator from "../../Navigator";
import Title from '../../share/Titles';

const About = () => (
  <main>
    <AppNavigator />
    
    <section className="text-center w-full">
      <Title.TitleMain type="h1">AboutPage</Title.TitleMain>
      
      <p className="max-w-[480px] m-auto mt-[50px] text-lg">
        Привет! Я Алиев Артур и это частный микро проект для считывания биржевых котировок с бесплатных ограниченных источников.
      </p>
    </section>
  </main>
);

export default About;