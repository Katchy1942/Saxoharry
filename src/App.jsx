import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import AboutPage from "./pages/AboutPage";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/admin/LoginPage";
import DashboardPage from "./pages/admin/DashboardPage";
import ManageBookingsPage from "./pages/admin/ManageBookingsPage";

const App = () => {
    return (
        <Router>
            <div className="flex flex-col min-h-screen">
                <Header />

                {/* Page content */}
                <main className="flex-grow">
                    <Routes>
                        {/* Public routes */}
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/gallery" element={<GalleryPage />} />
                        <Route path="/booking" element={<BookingPage />} />
                        <Route path="/contact" element={<ContactPage />} />

                        {/* Admin routes */}
                        <Route path="/admin/login" element={<LoginPage />} />
                        <Route path="/admin/dashboard" element={<DashboardPage />} />
                        <Route path="/admin/bookings" element={<ManageBookingsPage />} />

                        {/* Fallback */}
                        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
                    </Routes>
                </main>

                <Footer />
            </div>
        </Router>
    );
};

export default App;