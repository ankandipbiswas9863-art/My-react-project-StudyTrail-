import Home from './assets/Home';
import Log from './assets/Log';
import { BrowserRouter,Route,Routes} from "react-router-dom";

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/log" element={<Log/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;