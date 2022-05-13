import { getUserByUsername } from '../axios-services'
import { Header, SingleListings } from './index'
import '../index.css'

export default function App() {
  return (
    <div>
      <Header />
      <div className='content-container w-75 justify-content-center'>
        <SingleListings />
      </div>
    </div>
  )
}
