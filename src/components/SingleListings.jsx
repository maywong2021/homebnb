import { useState, useEffect } from "react";
import {
  ListingDescription,
  ListingHeading,
  CalendarSection,
  Amenities,
  Reviews,
  Location,
  ThingsToKnow,
  Booking
} from "./index";
import { getListing } from "../axios-services";

export default function SingleListings() {
  const [listing, setListing] = useState({});

  useEffect(() => {
    //? when more pages are set up replace the 1 in 'getListing(1)' with
    //? the useParams hook to grab differenct listings
    //? E.g. if url = home.bnb/listing/:listingId || const { listingId } = useParams
    //?  const currListing = getListing(listingId) || this will make the code more dynamic
    const currListing = getListing(1);
    setListing(currListing);
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center w-75">
      <ListingHeading listing={listing} />
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minWidth: "500px", minHeight: "400px" }}
      >
        <div className="d-flex">
          <img
            className="my-4"
            alt="property image"
            src={listing?.img?.[0]}
            style={{
              maxWidth: "700px",
              maxHeight: "400px",
              borderRadius: "1rem 0 0 1rem",
            }}
          />
          <img
            className="my-4 mx-2"
            alt="property image"
            src={listing?.img?.[1]}
            style={{
              maxWidth: "700px",
              maxHeight: "400px",
            }}
          />
          <img
            className="my-4"
            alt="property image"
            src={listing?.img?.[2]}
            style={{
              maxWidth: "700px",
              maxHeight: "400px",
              borderRadius: "0 1rem 1rem 0",
            }}
          />
        </div>
      </div>
      <div className='d-flex justify-content-around'>
        <div id="listing-desc">
          <ListingDescription listing={listing} />
          <CalendarSection />
        </div>
        <div className='d-flex justify-content-center align-items-start w-50'><Booking listing={listing}/></div>
      </div>
      <hr />
      <Amenities />
      <hr />
      <Reviews />
      <hr />
      {listing ? <Location listing={listing} /> : null}
      <hr />
      <ThingsToKnow />
    </div>
  );
}
