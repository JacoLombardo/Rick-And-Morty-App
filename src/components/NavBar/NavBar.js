import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Home from '../../views/Home';
import Characters from '../Characters';
import './NavBar.css'

function NavBar() {

  const [input, setInput] = useState("");

  const onChangeInput = (input) => {
    setInput(input.target.value);
    console.log(input.target.value)
  };

//  const countries = [
//   { name: "Belgium", continent: "Europe" },
//   { name: "India", continent: "Asia" },
//   { name: "Bolivia", continent: "South America" },
//   { name: "Ghana", continent: "Africa" },
//   { name: "Japan", continent: "Asia" },
//   { name: "Canada", continent: "North America" },
//   { name: "New Zealand", continent: "Australasia" },
//   { name: "Italy", continent: "Europe" },
//   { name: "South Africa", continent: "Africa" },
//   { name: "China", continent: "Asia" },
//   { name: "Paraguay", continent: "South America" },
//   { name: "Usa", continent: "North America" },
//   { name: "France", continent: "Europe" },
//   { name: "Botswana", continent: "Africa" },
//   { name: "Spain", continent: "Europe" },
//   { name: "Senegal", continent: "Africa" },
//   { name: "Brazil", continent: "South America" },
//   { name: "Denmark", continent: "Europe" },
//   { name: "Mexico", continent: "South America" },
//   { name: "Australia", continent: "Australasia" },
//   { name: "Tanzania", continent: "Africa" },
//   { name: "Bangladesh", continent: "Asia" },
//   { name: "Portugal", continent: "Europe" },
// ];
  

  // let filteredCharacters = characters.filter((character) => {
  //   return character.name.includes(character);
  // })

  // console.log(filteredCharacters)





  return (
    <Navbar className='navBar' sticky="top">
      <Container fluid>
        <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={input}
              onChange={onChangeInput}
            />
            <Button className="NavBarButton" variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>
  )
}

export default NavBar