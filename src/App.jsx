import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Collection from "./pages/Collection";

function App() {
  const [page, setPage] = useState("Home");

  const pageRouter = (p) => {
    setPage(p);
  }

  return (
    <>
      <main className="bg-gray-50 min-h-screen">
        <Sidebar pageRouter={pageRouter} />

        {/* Content */}
        <div className="w-full pt-10 px-4 sm:px-6 md:px-8 lg:pl-72">
          {page === "Home" && <Home />}
          {page === "Collection" && <Collection />}
        </div>
        {/* End Content */}
      </main>
    </>
  );
}

export default App;
