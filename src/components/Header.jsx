import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import { BiUserCircle } from 'react-icons/bi'
import { HiMenu } from 'react-icons/hi'
import { BsGlobe2 } from 'react-icons/bs'

export default function Header() {
  return (
    <header className='d-flex justify-content-between align-items-center '>
      <Container className='d-flex justify-content-between align-items-center my-2'>
        <img src='https://i.imgur.com/u8RwamC.png' style={{ width: '200px' }} />

        <div className='d-flex justify-content-around align-items-center w-25'>
          {/* Become a host button will link to new location */}
          <Button id='host-btn' variant='link' className='text-dark'>
            Become a host
          </Button>
          {/* Open a modal that lets you change Language/region and Currency */}
          <Button
            id='currency-language'
            variant='link'
            className='d-flex text-dark'
          >
            <BsGlobe2 size={20} />
          </Button>
          <Dropdown>
            <Dropdown.Toggle
              variant='link'
              id='dropdown-profile'
              className='text-dark'
            >
              <HiMenu size={25} />
              <BiUserCircle size={25} />
            </Dropdown.Toggle>
            <Dropdown.Menu align='end'>
              <Dropdown.Item href='#'>Sign up</Dropdown.Item>
              <Dropdown.Item href='#'>Log in</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href='#'>Host your home</Dropdown.Item>
              <Dropdown.Item href='#'>Host an experience</Dropdown.Item>
              <Dropdown.Item href='#'>Help</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </header>
  )
}

/* 
  <Navbar sticky='top' className='d-flex justify-content-between w-100'>
    <Navbar.Brand className='text-danger' expand='lg'>
      HomeBnB
    </Navbar.Brand>
    <Dropdown drop='down' navbar={true}>
      <Dropdown.Toggle variant='danger' id='dropdown-basic'>
        <BiUserCircle size={30} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href='#'>Sign up</Dropdown.Item>
        <Dropdown.Item href='#'>Log in</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href='#'>Host your home</Dropdown.Item>
        <Dropdown.Item href='#'>Host an experience</Dropdown.Item>
        <Dropdown.Item href='#'>Help</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Navbar>
*/
