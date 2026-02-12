import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-4">
      <Link className="navbar-brand fw-bold text-success" to="/">
        PickBazar
      </Link>

      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><a className="nav-link" href="/home">Shops</a></li>
          <li className="nav-item"><a className="nav-link" href="/home">Offers</a></li>
          <li className="nav-item"><a className="nav-link" href="/home">Contact</a></li>
        </ul>

        <Link to="/cart" className="btn btn-success">
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
