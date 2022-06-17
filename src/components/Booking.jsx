import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { BiPlus, BiMinus } from 'react-icons/bi'

export default function Booking({ listing: { price, reviews } }) {
  const [showGuests, setShowGuests] = useState(false)
  const [guestCount, setGuestCount] = useState(1)
  const [nonAdults, setNonAdults] = useState(0)
  const [pets, setPets] = useState(0)

  const toggleEvent = () => {
    const toggle = showGuests ? false : true
    setShowGuests(toggle)
  }

  const buttonEffect = (e) => {
    let rect = e.target.getBoundingClientRect()
    let x = e.clientX - rect.left
    let y = e.clientY - rect.top
    e.target.style.setProperty('--x', x + 'px')
    e.target.style.setProperty('--y', y + 'px')
  }

  const calculateGuests = () => {
    const guest =
      guestCount > 1 ? `${guestCount} guests` : `${guestCount} guest`
    const infant =
      nonAdults > 1 ? `${nonAdults} infants` : `${nonAdults} infant`
    if (nonAdults <= 0) return guest
    return `${guest}, ${infant}`
  }

  return (
    <div className='d-flex flex-column align-items-center' id='booking-card'>
      <div id='booking-info'>
        <div className='d-flex align-items-center justify-content-between'>
          <span>
            <span className='bold-font'>${price}</span> night
          </span>
          <span>
            <Button variant='link' className='text-dark'>
              {reviews?.length} reviews
            </Button>
          </span>
        </div>
        <div
          className='d-flex flex-column align-items-center border rounded-lg'
          id='booking-btns'
        >
          <Button className='d-flex w-100' variant='light' id='checkin-btn'>
            <div
              id='vr'
              className='d-flex flex-column pr-4 w-50 align-items-start'
            >
              <span className='bold-font'>CHECK-IN</span>
              <span className='text-secondary'>Add date</span>
            </div>
            <div className='d-flex flex-column px-3 w-50 align-items-start'>
              <span className='bold-font'>CHECKOUT</span>
              <span className='text-secondary'>Add date</span>
            </div>
          </Button>
          <hr className='w-100' />
          <Dropdown className='w-100' show={showGuests} autoClose='outside'>
            <Dropdown.Toggle
              variant='light'
              className='d-flex w-100 align-items-center'
              id='guests-btn'
              style={{ fontSize: '13px' }}
              onClick={toggleEvent}
            >
              <div className='d-flex flex-column align-items-start w-100'>
                <div className='bold-font'>GUESTS</div>
                <div>{calculateGuests()}</div>
              </div>
              <div>
                {showGuests ? (
                  <MdKeyboardArrowUp size={30} />
                ) : (
                  <MdKeyboardArrowDown size={30} />
                )}
              </div>
            </Dropdown.Toggle>
            <Dropdown.Menu
              flip={false}
              align='end'
              style={{
                width: '125%',
                fontSize: '1rem',
              }}
            >
              <Dropdown.Item
                as='div'
                style={{
                  marginTop: '1.2rem',
                  marginBottom: '1.2rem',
                }}
              >
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex flex-column'>
                    <span className='bold-font'>Adults</span>
                    <span>Age 13+</span>
                  </div>
                  <div className='d-flex align-items-center '>
                    <Button
                      variant='link'
                      className='d-flex justify-content align-items-center text-secondary border rounded-circle'
                      style={{ height: '40px', width: '40px' }}
                    >
                      <BiMinus size={20} />
                    </Button>
                    <div
                      className='text-center mx-2'
                      style={{ maxWidth: '20px', minWidth: '20px' }}
                    >
                      <span className=''>{guestCount}</span>
                    </div>
                    <Button
                      variant='link'
                      className='d-flex justify-content align-items-center text-secondary border rounded-circle'
                      style={{ height: '40px', width: '40px' }}
                    >
                      <BiPlus size={20} />
                    </Button>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                as='div'
                style={{
                  marginTop: '1.2rem',
                  marginBottom: '1.2rem',
                }}
              >
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex flex-column'>
                    <span className='bold-font'>Children</span>
                    <span>Ages 2-12</span>
                  </div>
                  <div className='d-flex align-items-center '>
                    <Button
                      variant='link'
                      className='d-flex justify-content align-items-center text-secondary border rounded-circle'
                      style={{ height: '40px', width: '40px' }}
                    >
                      <BiMinus size={20} />
                    </Button>
                    <div
                      className='text-center mx-2'
                      style={{ maxWidth: '20px', minWidth: '20px' }}
                    >
                      <span className=''>{guestCount}</span>
                    </div>
                    <Button
                      variant='link'
                      className='d-flex justify-content align-items-center text-secondary border rounded-circle'
                      style={{ height: '40px', width: '40px' }}
                    >
                      <BiPlus size={20} />
                    </Button>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                as='div'
                style={{
                  marginTop: '1.2rem',
                  marginBottom: '1.2rem',
                }}
              >
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex flex-column'>
                    <span className='bold-font'>Infants</span>
                    <span>Under 2</span>
                  </div>
                  <div className='d-flex align-items-center '>
                    <Button
                      variant='link'
                      className='d-flex justify-content align-items-center text-secondary border rounded-circle'
                      style={{ height: '40px', width: '40px' }}
                    >
                      <BiMinus size={20} />
                    </Button>
                    <div
                      className='text-center mx-2'
                      style={{ maxWidth: '20px', minWidth: '20px' }}
                    >
                      <span className=''>{nonAdults}</span>
                    </div>
                    <Button
                      variant='link'
                      className='d-flex justify-content align-items-center text-secondary border rounded-circle'
                      style={{ height: '40px', width: '40px' }}
                    >
                      <BiPlus size={20} />
                    </Button>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                as='div'
                style={{
                  marginTop: '1.2rem',
                  marginBottom: '1.2rem',
                }}
              >
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex flex-column'>
                    <span className='bold-font'>Pets</span>
                    <a id='bold-underline-font' className='text-wrap'>
                      Bringing a service animal?
                    </a>
                  </div>
                  <div className='d-flex align-items-center '>
                    <Button
                      variant='link'
                      className='d-flex justify-content align-items-center text-secondary border rounded-circle'
                      style={{ height: '40px', width: '40px' }}
                    >
                      <BiMinus size={20} />
                    </Button>
                    <div
                      className='text-center mx-2'
                      style={{ maxWidth: '20px', minWidth: '20px' }}
                    >
                      <span className=''>{pets}</span>
                    </div>
                    <Button
                      variant='link'
                      className='d-flex justify-content align-items-center text-secondary border rounded-circle'
                      style={{ height: '40px', width: '40px' }}
                    >
                      <BiPlus size={20} />
                    </Button>
                  </div>
                </div>
              </Dropdown.Item>
              <Dropdown.Item
                style={{
                  marginTop: '1.2rem',
                  marginBottom: '1.2rem',
                }}
              >
                <p className='text-wrap small'>
                  This place has a maximum of 8 guests, not including infants.
                  If you're bringing more than 2 pets, please let your host
                  know.
                </p>
              </Dropdown.Item>
              <Dropdown.Item
                variant='light'
                className='d-flex justify-content-end'
              >
                <Button
                  variant='link'
                  className='text-dark'
                  onClick={() => setShowGuests(false)}
                >
                  <span id='close-guests-btn'>Close</span>
                </Button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          {/* <Button
            className='d-flex w-100 align-items-center'
            variant='light'
            id='guests-btn'
          >
            <div className='d-flex flex-column align-items-start w-100'>
              <span className='bold-font'>GUESTS</span>
              <div>{calculateGuests()}</div>
            </div>
            <div>
              <MdKeyboardArrowDown size={30} />
            </div>
          </Button> */}
        </div>
        <Button
          className='btn-block mt-4 mouse-cursor-gradient-tracking'
          id='check-btn'
          onMouseMove={(e) => buttonEffect(e)}
        >
          Check availability
        </Button>
      </div>
    </div>
  )
}
