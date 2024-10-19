import { Link, Outlet } from 'react-router-dom'
import './home.css'
function Home() {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">Employee Management</div>
                <ul className="navbar-links">
                    <Link to='/addform'><li>Add-Employees</li></Link>
                    <Link to='/addtable'><li>Employees-Table</li></Link>


                    <li><a href="/departments">Departments</a></li>
                    <li><a href="/reports">Reports</a></li>
                    <li><a href="/settings">Settings</a></li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </div>
    )
}
export default Home 