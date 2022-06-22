import React from "react";
import SearchArtist from "./components/SearchArtist";
import ArtistEvents from "./components/ArtistEvents";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SearchArtist />} />
        <Route path="/events/:name" element={<ArtistEvents />} />
      </Routes>
    </>
  );
}

export default App;
