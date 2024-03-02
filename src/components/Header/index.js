import { CiSearch } from "react-icons/ci";

import './index.css'

const Header=()=>(
    <nav className="nav-container">
        <div className="input-container">
            <CiSearch className="search-icon"/>
            <input type="search" className="input-El" placeholder="search"/>
        </div>
        <ul className="tabs-list">
            <li className="tab-item nav-border">Categories</li>
            <li className="tab-item nav-border">Website Builders</li>
            <li className="tab-item nav-border">Today's deals</li>
        </ul>
    </nav>
)

export default Header