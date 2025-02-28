import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/manage-donations">Manage Donations</Link></li>
        <li><Link to="/admin/manage-users">Manage Users</Link></li>
        <li><Link to="/admin/reports">Reports</Link></li>
        <li><Link to="/admin/settings">Settings</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNavbar;
