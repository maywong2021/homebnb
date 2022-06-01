import { useState, useEffect } from 'react'
import {
  ListingDescription,
  ListingHeading,
  Amenities,
  Reviews,
  Location,
  ThingsToKnow,
} from './index'
import { getListing } from '../axios-services'

export default function SingleListings() {
  const [listing, setListing] = useState({})

  useEffect(() => {
    //? when more pages are set up replace the 1 in 'getListing(1)' with
    //? the useParams hook to grab differenct listings
    //? E.g. if url = home.bnb/listing/:listingId || const { listingId } = useParams
    //?  const currListing = getListing(listingId) || this will make the code more dynamic
    const currListing = getListing(1)
    setListing(currListing)
  }, [])

  return (
    <div className='d-flex flex-column justify-content-center w-75'>
      <ListingHeading listing={listing} />
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ minWidth: '500px', minHeight: '400px' }}
      >
        <h1>Listing Images</h1>
      </div>
      <div className='d-flex justify-content-between'>
        <ListingDescription listing={listing} />
        <div className='w-25'>CALENDAR HERE</div>
      </div>
      <hr />
      <Amenities />
      <Reviews />
      <Location />
      <ThingsToKnow />
    </div>
  )
}
