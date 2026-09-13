
import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Technologies from "./components/Technologies";
import YourStack from "./components/YourStack";
import { useState } from "react";
import type { TechType } from "./types/techTypes";

function App() {
  const [stack, setStack] = useState<TechType[]>([]);

  return (
    <>
      <Nav />

      <Banner />

      <main className="container mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* Technologies */}
          <div className="lg:col-span-3 min-w-0">
            <Technologies
              stack={stack}
              setStack={setStack}
            />
          </div>

          {/* Your Stack */}
          <div className="lg:col-span-1 min-w-0 lg:pt-34">
            <YourStack
              stack={stack}
              setStack={setStack}
            />
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;

