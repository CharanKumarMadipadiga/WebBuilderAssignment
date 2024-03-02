import './index.css'

const Footer=()=>(
    <div className='footer-container'>
        <ul className='categories-list'>
            <h1 className='footer-heading'>CATEGORIES</h1>
            <li>Web Builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
        </ul>

        <ul className='categories-list'>
            <h1 className='footer-heading'>CONTACT</h1>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms Of Service</li>
            <li>Categories</li>
            <li>About</li>
        </ul>

        <select className='select-container'>
            <option>United States</option>
            <option>India</option>
            <option>Russia</option>
            <option>Austraila</option>
            <option>South Africa</option>
        </select>
    </div>
)

export default Footer