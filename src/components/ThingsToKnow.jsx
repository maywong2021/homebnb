import {
  AiFillClockCircle,
  AiFillExclamationCircle,
  AiFillCreditCard,
  AiFillSound
} from "react-icons/ai";
import { IoLogoNoSmoking } from "react-icons/io";
import { MdPets } from "react-icons/md";
import { BiAlarmExclamation } from "react-icons/bi";
import { GiStairs, GiBalloons } from "react-icons/gi";
import { HiSparkles } from "react-icons/hi";

export default function ThingsToKnow() {
  return (
    <>
      <hr />
      <div>
        <h2>Things to know</h2>
        <h3>House rules</h3>
        <div>
          <ol>
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
        <h3>Health & safety</h3>
        <div>
          <ol>
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
        <h3>Cancellation policy</h3>
      </div>
    </>
  );
}
