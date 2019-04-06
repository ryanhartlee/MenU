import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import SignInModal from '../Modals/SignInModal';
import logo from '../../images/MenULogo.png'
import './navbar.css';

export default class NavbarZ extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
          <NavbarBrand>
           <div className="logoImage">
           <a href="/"><img src={logo}></img></a>
           </div>
          </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Post Recipe</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/user">Profile</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Restaurants
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <a href="/starbucks">Starbucks</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="/dutchbros">Dutch Bros</a>
                  </DropdownItem>
                  <DropdownItem>
                    <a href="/sonic">Sonic</a>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    More on the way!
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <SignInModal />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}