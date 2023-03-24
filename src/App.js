import Everything from "./components/everything/everything.component";
import Eid from "./components/eid/eid.component";
import { getTimeLeft } from "./utils/time";
import {useState, useEffect} from "react";

const App = () => {
    const [timeLeft, setTimeLeft] = useState(false);
  return (
    <>
      <Everything />
    </>
  )
}

export default App;
