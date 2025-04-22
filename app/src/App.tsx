import HomePage from "./pages/HomePage";
import ScrollProgress from "./pages/scrollBar";
import { Analytics } from "@vercel/analytics/next";

function App() {
  return (
    <div className="h-min ">
      <HomePage />
      <Analytics />
      <ScrollProgress />
    </div>
  );
}

export default App;
