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
import CreateDrinkModal from '../Modals/CreateDrinkModal';
import logo from '../../images/MenULogo.png'
import './navbar.css';
import store from '../../store';

export default class NavbarZ extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      loggedIn: false
    };
  }

  componentDidMount = () => {
    if (store.getState().auth.isAuthenticated === true) {
      this.setState({
        loggedIn: true
        });
    }
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
                {this.state.loggedIn ? <CreateDrinkModal /> : null }  
              </NavItem>
              <NavItem>
               {this.state.loggedIn ? null : <SignInModal />}
              </NavItem>
              <NavItem>
              {this.state.loggedIn ? <NavLink href="/user">Profile</NavLink> : null }
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Restaurants
                </DropdownToggle>
                <DropdownMenu right>
                <a href="/starbucks"><DropdownItem>
                    Starbucks
                  </DropdownItem></a>
                  <a href="/dutchbros"><DropdownItem>
                    Dutch Bros
                  </DropdownItem></a>
                  <a href="/sonic"><DropdownItem>
                      Sonic
                    </DropdownItem></a>
                  <DropdownItem divider />
                  <DropdownItem>
                    More on the way!
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}