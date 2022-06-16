import Button from 'react-bootstrap/Button'
import { BsDot } from 'react-icons/bs'

export default function ListingDescription({
  listing: { host, arrangement, description },
}) {
  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <h3>{`Treehouse hosted by ${host?.username}`}</h3>
          <ol id='room-list' className='d-flex'>
            {arrangement?.map(({ name, count }, i) => {
              return i === 0 ? (
                <li key={i}>
                  <span>{`${count} ${name}`}</span>
                </li>
              ) : (
                <li key={i}>
                  <BsDot />
                  <span>{`${count} ${name}`}</span>
                </li>
              )
            })}
          </ol>
        </div>
        <Button className='p-0' style={{ borderRadius: '50%' }}>
          <img
            alt='profile'
            src={host?.userIcon}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
            }}
          />
        </Button>
      </div>
      <hr />
      <div className='py-4'>
        <p>{description?.main}</p>
        {description?.notes && <p>{description?.notes}</p>}
      </div>
    </div>
  )
}
