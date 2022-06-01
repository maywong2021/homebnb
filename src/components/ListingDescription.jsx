import Button from "react-bootstrap/Button";
import { BsDot } from "react-icons/bs";

export default function ListingDescription() {
  return (
    <div id="listing-desc">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h3>Treehouse hosted by The Cyberknights</h3>
            <ol id="room-list" className="d-flex">
              <li>
                <span>4 guests</span>
              </li>
              <li>
                <span>
                  <BsDot size={10} />
                </span>
                <span>1 bedroom</span>
              </li>
              <li>
                <span>
                  <BsDot size={10} />
                </span>
                <span>1 bed</span>
              </li>
              <li>
                <span>
                  <BsDot size={10} />
                </span>
                <span>1 bath</span>
              </li>
            </ol>
          </div>
          <Button>
            <img
              alt="profile"
              src="https://cdn-icons-png.flaticon.com/512/63/63633.png"
              height="40px"
              width="40px"
            ></img>
          </Button>
        </div>
        <hr />
        <div className="py-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
    </div>
  );
}
