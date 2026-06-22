import Home from './assets/Home';
import Log from './assets/Log';
import Signed from './assets/signed';
import { BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/log" element={<Log/>}/>
          <Route path="/signed" element={<Signed/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;