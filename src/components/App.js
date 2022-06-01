import { getUserByUsername } from "../axios-services";
import {
  Header,
  SingleListings,
} from "./index";
import "../index.css";

export default function App() {
  return (
    <div className="d-flex flex-column align-items-center">
      <Header />
      <div className="d-flex content-container w-100 justify-content-center">
        <SingleListings />
      </div>
    </div>
  );
}
