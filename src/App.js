import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/MainPage'
import Work from './pages/Work'
const App=()=> {
  return (
<Routes>
        <Route path="/" element={<Home />} />
        <Route path="work" element={<Work />} />
      </Routes>
    );
}

export default App;
