import { Link, Outlet } from "react-router-dom";

function Services() {
  return (
    <div>
      <h1>Our Services</h1>

      <div className="sub-nav">
        <Link to="web">Web Development</Link>
        <Link to="app">App Development</Link>
        <Link to="uiux">UI/UX Design</Link>
      </div>

      {/* Nested content will render here */}
      <Outlet />
    </div>
  );
}

export default Services;