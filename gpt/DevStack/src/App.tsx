
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Technologies from './components/Technologies'
import YourStack from './components/YourStack'
import { useState } from 'react'
import type { TechType } from "./types/techTypes";






function App() {
  const [stack, setStack] = useState<TechType[]>([])

  return (
    <>

      <Nav />
      <Banner />

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          <div className="lg:col-span-3">
            <Technologies
              stack={stack}
              setStack={setStack}
            />
          </div>

          <div className="lg:col-span-1">
            <YourStack
              stack={stack}
              setStack={setStack}
            />
          </div>

        </div>
      </div>

      <Footer />

    </>
  )
}

export default App
