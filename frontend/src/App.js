
import "@/App.css";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import Hero from "@/components/Hero";
import Chapter from "@/components/Chapter";
import Finale from "@/components/Finale";
import ScrollProgress from "@/components/ScrollProgress";
import TopBar from "@/components/TopBar";
import { chapters } from "@/data/chapters";
import Ambience from "./components/Ambience";
function App() {
  return (
    <>
      <Ambience />

      {/* existing stuff */}
      <Hero />
      {/* etc */}
    </>
  );
}
function App() {
  useSmoothScroll();

  return (
    <div className="App bg-[#0a0b0a] text-[#e6e0d4] min-h-screen" data-testid="app-root">
      <ScrollProgress />
      <TopBar />
      <main data-testid="main">
        <Hero />
        {chapters.map((c, i) => (
          <Chapter key={c.id} chapter={c} index={i} />
        ))}
        <Finale />
      </main>
    </div>
  );
}

export default App;
