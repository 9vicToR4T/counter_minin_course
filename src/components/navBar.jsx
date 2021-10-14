const NavBar = ({ totalCount }) => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Users</a>
      </li>
      <li className="nav-item ">
        <a className="nav-link position-relative disabled" href="/">
          Car
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalCount}
            <span className="visually-hidden">unread messages</span>
          </span>
        </a>
      </li>
    </ul>
  );
};
 
export default NavBar;