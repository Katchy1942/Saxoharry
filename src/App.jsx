import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./HomePage";

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />

                        <Route path="*" element={
                            <div className="flex items-center justify-center h-screen">
                                <h1 className="text-3xl font-bold">
                                    404 - Page Not Found
                                    <Link to="/" className="underline">Home</Link>
                                </h1>
                            </div>
                        } />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
};

export default App;