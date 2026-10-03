import clsx from "clsx";
import Charts from "./components/Charts";
import Navbar from "./components/Navbar";
import { useDarkMode } from "./hooks/useDarkMode";

import { data } from "./data.js";

const App = () => {
  const [geceModu, setGeceModu] = useDarkMode(false);

  return (
    <div
      className={clsx("text-center", { "dark-theme": geceModu })}
      data-testid="app"
    >
      <Navbar geceModu={geceModu} setGeceModu={setGeceModu} />
      <Charts coinData={data} />
    </div>
  );
};

export default App;