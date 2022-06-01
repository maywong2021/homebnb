import { AiFillStar } from 'react-icons/ai'
import { BsDot } from 'react-icons/bs'
import { GoPerson } from 'react-icons/go'
import { FiShare } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import Button from 'react-bootstrap/Button'

export default function ListingHeading({
  listing: { title, reviews, location },
}) {
  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
      <div className='d-flex justify-content-between align-content-center'>
        <div className='d-flex align-items-center gap-5'>
          <AiFillStar size={20} />
          <p className='align-self-center mb-0'>4.99</p>
          <BsDot size={10} />
          <Button variant='link' className='text-dark'>
            {reviews.length} reviews
          </Button>
          <BsDot size={10} />
          <GoPerson id='go-person' />
          <p className='mb-0'>Superhost</p>
          <BsDot size={10} />
          <span className='d-flex'>
            <Button variant='link' className='text-dark' value='Ashenville,'>
              {location.where}
            </Button>
          </span>
        </div>
        <div className='d-flex '>
          <div>
            <FiShare />
            <Button variant='link' className='text-dark' value='Share'>
              Share
            </Button>
          </div>
          <div>
            <AiOutlineHeart />
            <Button variant='link' className='text-dark' value='Save'>
              Save
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
