import {
  ListingDescription,
  ListingHeading,
  Amenities,
  Reviews,
  Location,
  ThingsToKnow,
} from './index'

export default function SingleListings() {
  return (
    <div className='d-flex flex-column justify-content-center w-75'>
      <ListingHeading />
      <div
        className='d-flex justify-content-center align-items-center'
        style={{ minWidth: '500px', minHeight: '400px' }}
      >
        <h1>Listing Images</h1>
      </div>
      <div className='d-flex justify-content-between'>
        <ListingDescription />
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
