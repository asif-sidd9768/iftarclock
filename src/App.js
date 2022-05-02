import Everything from "./components/everything/everything.component";
import Eid from "./components/eid/eid.component";
import { getTimeLeft } from "./utils/time";

const App = () => {

  return (
    <>
      {
        getTimeLeft().seconds > 0 ? (
          <Everything />
        ) : ( 
          <Eid />
        )
      }
    </>
  )
}

export default App;
