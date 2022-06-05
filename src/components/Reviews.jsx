import { AiFillStar } from "react-icons/ai";

export default function Reviews() {
  return (
    <>
      <hr />
      <div>
        <h2>
          <AiFillStar size={22} />
          4.99 (423 reviews)
        </h2>
        <div>
          <h3>May</h3>
          <a href="#">
            <img
              alt="may"
              src="https://data.whicdn.com/images/208368003/original.jpg"
              height="40px"
              width="40px"
            />
          </a>
          <ol>
            <li>February 2022</li>
          </ol>
          <span>Amazing views and lovely hosts!!! :)</span>
        </div>
      </div>
    </>
  );
}
