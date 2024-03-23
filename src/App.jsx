import "./App.css";
import { Navbar } from "./pages-components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="relative h-screen w-screen bg-white">
        <div className="absolute h-screen w-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
    </>
  );
}

export default App;
