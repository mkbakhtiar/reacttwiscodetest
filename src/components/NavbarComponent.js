import React, { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { FaSortDown } from 'react-icons/fa';
import {
  Navbar,
  Container, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import logo from '../logo.png';

const NavbarComponent = (props) => {
    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);
  return (
    <div>
      <Navbar light expand="md">
        <Container>
            <div className="leftHead"></div>
            <div className="logoHead">
                <img src={logo} className="logo-header" alt="logo" />
            </div>
            <div className="langGear">
                Language :

                <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret color="default">
                        English
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Language</DropdownItem>
                        <DropdownItem>Indonesia</DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <FaCog />
            </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
