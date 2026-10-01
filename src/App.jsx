import { useState } from "react";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

export default function App() {
  const [start, setStart] = useState(false);

  return start ? (
    <Dashboard />
  ) : (
    <Landing onStart={() => setStart(true)} />
  );
}