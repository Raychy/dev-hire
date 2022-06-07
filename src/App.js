import './Assets/css/style.css';
import HomePage from './Pages/Home';
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Routes, Route } from "react-router-dom";
import FavoritePage from './Pages/Favorite';
import JobMenu from './Components/JobMenu';
import Footer from './Components/Footer';

function App() {
  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    
    <div className="container">
        <div className="col__one">
         <JobMenu />
        </div>
        <div className="col__two">
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            
          </Routes>
         
        </div>
      </div>
      <Footer />
     
    </PersistGate>
    </Provider>
  );
}

export default App;
