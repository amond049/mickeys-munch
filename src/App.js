import './App.css';
import HomePage from './Pages/HomePage';
import EatInPage from './Pages/EatInPage';
import HostOccasion from './Pages/HostOccasion';
import WorkWithUs from './Pages/WorkWithUs';
import TakeOut from './Pages/TakeOut';
import CheckOut from './Pages/CheckOut';
import PageNotFound from './Pages/PageNotFound';
import FAQ from './Pages/FAQ';
import FAQ_bn from './Pages/FAQ-bn';


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
      <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/reservations" element={<EatInPage/>}></Route>
          <Route path="/hostoccasion" element={<HostOccasion/>}></Route>
          <Route path="/joinourteam" element={<WorkWithUs/>}></Route>
          <Route path="/takeout" element={<TakeOut/>}></Route>
          <Route path="/checkout" element={<CheckOut/>}></Route>
          <Route path="/faq/en" element={<FAQ/>}></Route>
          <Route path="faq/bn" element={<FAQ_bn/>}></Route>
          <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
