
import { NavLink } from 'react-router'

const NavItem = ({item}) => {
  return (
    <div>
        <li className="nav-bar__nav-item">
          <NavLink to={item.ruta} target="_self"  className="nav-bar__nav-link">{item.nombre}</NavLink>
        </li>
    </div>
  )
}

export default NavItem
