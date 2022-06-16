import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

export default function Booking({ listing: { price, reviews } }) {
  return (
    <div className="d-flex flex-column align-items-center">
      <div className="d-flex align-items-center w-75 justify-content-between">
        <span>${price} night</span>
        <span>
          <Button variant="link" className="text-dark">
            {reviews?.length} reviews
          </Button>
        </span>
      </div>
      <div className="d-flex flex-column align-items-center w-75">
        <Button className="d-flex w-100" variant="light">
          <div className="d-flex flex-column pr-4">
            <span>CHECK-IN</span>
            <span>Add date</span>
          </div>
          <div className="d-flex flex-column px-3">
            <span>CHECKOUT</span>
            <span>Add date</span>
          </div>
        </Button>
        <Button className="d-flex flex-column w-100" variant="light">
          <span>GUESTS</span>
          <span>1 guest</span>
        </Button>
      </div>
    </div>
  );
}
