
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ClientRegister from './pages/register/client-register';
// import ClientLogin from './pages/login/client-login';
import ConsultantRegister from './pages/register/consultant-register';
// import ConsultantLogin from './pages/login/consultant-login';
import SuperUserLogin from './pages/login/superUser-login';

const App = () => {
  

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/register-client">Register Client</Link>
          </li>
          <li>
            <Link to="/login-client">Login Client</Link>
          </li>
          <li>
            <Link to="/register-consultant">Register Consultant</Link>
          </li>
          <li>
            <Link to="/login-consultant">Login Consultant</Link>
          </li>
          <li>
            <Link to="/login-superUser">Login SuperUser</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/register-client" element={<ClientRegister />} />
        {/* <Route path="/login-client" element={<ClientLogin />} /> */}
        <Route path="/register-consultant" element={<ConsultantRegister />} />
        {/* <Route path="/login-consultant" element={<ConsultantLogin />} /> */}
        <Route path="/login-superUser" element={<SuperUserLogin />} />
      </Routes>
    </Router>
  );
};

export default App;
