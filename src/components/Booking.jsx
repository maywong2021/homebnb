import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Booking({ listing: { price, reviews } }) {
  return (
    <div className="d-flex flex-column align-items-center" id="booking-card">
      <div id="booking-info">
        <div className="d-flex align-items-center justify-content-between">
          <span>
            <span className="bold-font">${price}</span> night
          </span>
          <span>
            <Button variant="link" className="text-dark">
              {reviews?.length} reviews
            </Button>
          </span>
        </div>
        <div
          className="d-flex flex-column align-items-center border rounded-lg"
          id="booking-btns"
        >
          <Button className="d-flex w-100" variant="light" id="checkin-btn">
            <div className="d-flex flex-column pr-4 w-50 align-items-start">
              <span className="bold-font">CHECK-IN</span>
              <span className="text-secondary">Add date</span>
            </div>
            <div id="vr"></div>
            <div className="d-flex flex-column px-3 w-50 align-items-start">
              <span className="bold-font">CHECKOUT</span>
              <span className="text-secondary">Add date</span>
            </div>
          </Button>
          <hr className="w-100" />
          <Button
            className="d-flex w-100 align-items-center"
            variant="light"
            id="guests-btn"
          >
            <div className="d-flex flex-column align-items-start w-100">
              <span className="bold-font">GUESTS</span>
              <div>1 guest</div>
            </div>
            <div>
              <MdKeyboardArrowDown size={30} />
            </div>
          </Button>
        </div>
        <Button
          className="btn-block mt-4 mouse-cursor-gradient-tracking"
          id="check-btn"
          onMouseMove={e=>{
            let rect = e.target.getBoundingClientRect();
            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            e.target.style.setProperty("--x", x + "px");
            e.target.style.setProperty("--y", y + "px");
          }}
        >
          Check availability
        </Button>
      </div>
    </div>
  );
}
