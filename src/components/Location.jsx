export default function Location({ listing: { location } }) {
  return (
    <div className='d-flex flex-column my-5'>
      <h2>Location</h2>
      <div
        className='d-flex mb-4 justify-content-center align-items-center align-self-center bg-secondary '
        style={{ width: '600px', height: '400px' }}
      >
        <h1>insert google maps?</h1>
      </div>
      <div className='d-flex justify-content-between'>
        <div style={{ width: '45%' }}>
          <h4 className='mb-3'>{location?.where}</h4>
          <p>{location?.description}</p>
        </div>
        <div style={{ width: '45%' }}>
          <h4 className='mb-3'>Distance from {location?.airport}</h4>
          <p>{location?.distance}</p>
        </div>
      </div>
    </div>
  )
}
