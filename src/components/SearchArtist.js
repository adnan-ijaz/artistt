import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchArtist = () => {
  const [artistData, setArtistData] = useState(null);
  const [search, setSearch] = useState("");
  const [visible, setVisible] = useState(false);
  const navigate=useNavigate()

  const artistDEtails = async (e) => {
    e.preventDefault();
    if(search===''){
        alert('Please Enter Artist Name')
    }
    try {
      const { data } = await axios.get(
        `https://rest.bandsintown.com/artists/${search}?app_id=abc`
      );
      setArtistData(data);
      console.log(data);
      setVisible(true);
    } catch (err) {
      console.log(err.message);
    }
  };
  const changeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
    setVisible(false);
  };

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-2">Search Artist</h1>
        <div className="mb-3">
          <label htmlFor="artistName" className="form-label">
            Search Artist By Name
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Artist Name"
            onChange={changeHandler}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                artistDEtails(e);
              }
            }}
          />
        </div>
        <hr />
        {artistData === null ? (
          <h4>Data Not Found</h4>
        ) : visible ? (
          <div
            className="card mb-3"
            style={{ maxWidth: 540 }}
            onClick={() => navigate(`/events/${artistData.name}`)}
          >
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={artistData.image_url}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{artistData.name}</h5>
                  <p className="card-text">
                    <small className="text-muted">
                      {artistData.facebook_page_url}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SearchArtist;
