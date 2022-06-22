import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
const ArtistEvents = () => {
  const [events, setEvents] = useState([]);

  const { name } = useParams();
  const Events = async () => {
    try {
      const { data } = await axios.get(
        `https://rest.bandsintown.com/artists/${name}/events?app_id=abc&date=2017-03-19T11%3A00%3A00`
      );
      setEvents(data);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    Events();
  }, []);

  return (
    <div className="container">
      <Link to="/" className="nav-link text-primary my-5">
        Back To Results
      </Link>
      <p className="mb-3">{events.length} upcoming events</p>

      {events.length === 0 ? (
        <h3>No Upcoming Events</h3>
      ) : (
        <div className="row">
          {events.map((events) => (
            <div className="col-md-4 mb-3">
              <div className="card" style={{ maxWidth: 540 }}>
                <div className="card-body">
                  <h5 className="card-title">Event Details</h5>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="card-title">Country</h5>
                      <h6 className="card-subtitle text-muted">{events.venue.country}</h6>
                    </div>
                    <div className="col-md-6">
                      <h5 className="card-title">City</h5>
                      <h6 className="card-subtitle text-muted">{events.venue.city}</h6>
                    </div>
                    <div className="col-md-6">
                      <h5 className="card-title">Venue</h5>
                      <h6 className="card-subtitle text-muted">{events.venue.name}</h6>
                    </div>
                    <div className="col-md-6">
                      <h5 className="card-title">Date</h5>
                      <h6 className="card-subtitle text-muted">{events.datetime}</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArtistEvents;
