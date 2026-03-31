import Header from '../components/Header/Header';
import Details from '../components/Details/Details';
import Footer from '../components/Footer/Footer';

import '../css/global.css';

function Detailed() {
    return (
        <>
            <Header />
            <main className="main">
                <Details />
            </main>
            <Footer />
        </>
    );
}

export default Detailed;
