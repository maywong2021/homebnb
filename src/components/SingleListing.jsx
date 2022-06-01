import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { GoPerson } from "react-icons/go";
import { FiShare } from "react-icons/fi";
import Button from "react-bootstrap/Button";

export default function SingleListing() {
  return (
    <>
      <div>
        <span>
          <h1>The Treehouse of Your Dreams</h1>
        </span>
      </div>
      <div>
        <span>
          <span>
            <AiFillStar size={20} />
          </span>
          <span>
            4.98 <BsDot size={10} />
          </span>
          <span>
            <Button variant="link" className="text-dark">
              550 reviews
            </Button>
          </span>
          <span>
            <BsDot size={10} />
          </span>
          <span>
            <span>
              <GoPerson id="goperson" />
            </span>
            <span>Superhost</span>
          </span>
          <span>
            <BsDot size={10} />
          </span>
          <span>
            <Button variant="link" className="text-dark">
              <span>Anywhere, Dreamland</span>
            </Button>
          </span>
        </span>
      </div>
      <div>
        <div>
          <div>
            <div>
              <Button variant="link" className="text-dark">
                <span>
                  <FiShare /> Share
                </span>
              </Button>
              <div>
                <div>
                  <span>
                    <Button variant="link" className="text-dark">
                      <span>
                        <AiOutlineHeart /> Save
                      </span>
                    </Button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
