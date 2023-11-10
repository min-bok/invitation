import {BrowserRouter, Routes, Route} from "react-router-dom"
import Test from "./Test";
import Com from './Com';

function App() {
  return (
<BrowserRouter>
  <Routes>
  <Route path='/' element={<Test/>}></Route>
    <Route path='/:id' element={<Com/>}></Route>
  </Routes>
</BrowserRouter>
  );
}

export default App;
