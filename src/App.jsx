import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import Shows from './pages/Shows.jsx';
import Detailed from './pages/Detailed.jsx';

import './css/global.css';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/shows" element={<Shows />} />
                <Route path="/details/:id" element={<Detailed />} />
                {/* 404 - route back to home page */}
                <Route path="*" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
