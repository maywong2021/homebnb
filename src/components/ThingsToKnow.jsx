import {
  AiFillClockCircle,
  AiFillExclamationCircle,
  AiFillCreditCard,
  AiFillSound,
} from 'react-icons/ai'
import { IoLogoNoSmoking } from 'react-icons/io'
import { MdPets } from 'react-icons/md'
import { BiAlarmExclamation } from 'react-icons/bi'
import { GiStairs, GiBalloons } from 'react-icons/gi'
import { HiSparkles } from 'react-icons/hi'

export default function ThingsToKnow() {
  return (
    <div className='d-flex flex-column my-5'>
      <h3 className='mb-4'>Things to know</h3>
      <div className='d-flex justify-content-between'>
        <div style={{ width: '30%' }}>
          <h5>House rules</h5>
          <div>
            <ol style={{ listStyle: 'none' }}>
              <li>
                <AiFillClockCircle size={15} />
                Check-in: 3:00 PM - 12:00 AM
              </li>
              <li>
                <AiFillClockCircle size={15} />
                Checkout: 10:00 AM
              </li>
              <li>
                <IoLogoNoSmoking size={15} />
                No smoking
              </li>
              <li>
                <MdPets size={15} />
                Pets allowed
              </li>
              <li>
                <GiBalloons size={15} />
                Parties and events allowed
              </li>
            </ol>
          </div>
        </div>
        <div className='mx-4' style={{ width: '30%' }}>
          <h5>Health & safety</h5>
          <div>
            <ol style={{ listStyle: 'none' }}>
              <li>
                <HiSparkles size={15} />
                Homebnb's COVID-19 safety practices apply
              </li>
              <li>
                <AiFillExclamationCircle size={15} />
                Security camera/recording device
              </li>
              <li>
                <BiAlarmExclamation size={15} />
                Carbon monoxide alarm
              </li>
              <li>
                <BiAlarmExclamation size={15} />
                Smoke alarm
              </li>
              <li>
                <AiFillCreditCard size={15} />
                Security Deposit - if you damage the home, you may be charged up
                to $350
              </li>
            </ol>
          </div>
        </div>
        <div style={{ width: '30%' }}>
          <h5>Cancellation policy</h5>
          <ol style={{ listStyle: 'none' }}>
            <li>
              Add your trip dates to get the cancellation details for this stay.
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
