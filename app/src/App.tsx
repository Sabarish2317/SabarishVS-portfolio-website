import HomePage from "./pages/HomePage";
import ScrollProgress from "./pages/scrollBar";

function App() {
  return (
    <div className="mx-auto">
      <HomePage />
      <ScrollProgress /> // Horizontal scroll bar
    </div>
  );
}

export default App;
