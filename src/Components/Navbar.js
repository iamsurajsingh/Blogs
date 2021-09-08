const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="nav-item">
          <a href="#">All</a>
        </li>
        <li className="nav-item">
          <a href="#">Type1</a>
        </li>
        <li className="nav-item">
          <a href="#">Type2</a>
        </li>
        <li className="nav-item">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="menu-bar">
        Menu
        <span className="hamburger-icon">
          <i className="fa fa-bars"></i>
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
