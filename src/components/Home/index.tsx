import React from 'react';
import {TitleMain} from "src/components/share/Titles";
import Desk from "src/components/Home/components/Desk";
import AppNavigator from "src/components/Navigator";


const Home = () => (
  <main>

    <AppNavigator />

    
    <section className="text-center w-full">
      <TitleMain type="h1">Home page</TitleMain>
      
      <Desk />
      
    </section>
  </main>
);

export default Home;