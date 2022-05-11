import Button from 'react-bootstrap/Button'
import { getUserByUsername } from '../axios-services'

export default function App() {
  return (
    <div>
      <h1>homeBnB</h1>
      <Button onClick={() => getUserByUsername('kyle')}>Test</Button>
    </div>
  )
}
