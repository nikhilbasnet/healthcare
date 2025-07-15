import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Consultation from "./pages/Consultation";
import BookAppointment from "./pages/BookAppointment";
import Packages from "./pages/Packages";
import AskQuestion from "./pages/AskQuestion";
import NotFound from "./pages/NotFound";
import About from "./pages/About"
import Contact from "./pages/Contact"
import FindDoctor from "./pages/FindDoctor";
import SearchResults from "./pages/SearchResult";
import SearchBar from "./components/SearchBar";
import Login from "./pages/Login";


// function Layout({ children }) {
//   return (
//     <div className="font-sans min-h-screen flex flex-col">
//       <Header />
//       <main className="flex-1">{children}</main>
//       <Footer />
//     </div>
//   );
// }
function Layout({ children }) {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />

      {/* ✅ Show SearchBar globally (on every page) */}
      <div className="p-4 bg-gray-50">
        <SearchBar />
      </div>

      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consult" element={<Consultation />} />
          <Route path="/book" element={<BookAppointment />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/ask" element={<AskQuestion />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path ="/find" element ={<FindDoctor/>} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/login" element={<Login />} />
          
          


        </Routes>
      </Layout>
    </Router>
  );
}
