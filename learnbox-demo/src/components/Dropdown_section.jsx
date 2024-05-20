import Dropdown from 'react-bootstrap/Dropdown';

import gsap from "gsap"
import { useLayoutEffect, useRef } from "react"

import './Sections.css'

function Dropdown_section() {

  return (
    <div className="dropdown-wrapper">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Informatică
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Discuții</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Probleme</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Întrebări</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Istorie
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Discuții</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Probleme</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Întrebări</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Matematică
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Discuții</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Probleme</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Întrebări</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Chimie
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Discuții</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Probleme</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Întrebări</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>

  );
}

export default Dropdown_section;