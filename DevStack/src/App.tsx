
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Technologies  from './components/Technologies'
import YourStack from './components/YourStack'
import { useState } from 'react'
import type { TechType } from "./types/techTypes";






function App() {
 const [stack,setStack] =useState<TechType[]> ([])

  return (
    <>
     
     <Nav />
     <Banner/>
     <Technologies stack={stack} setStack={setStack}/>
     <YourStack stack={stack} setStack={setStack}/>
     <Footer/>

    </>
  )
}

export default App
