import { Link } from "react-router-dom";


export default function Navbar(){
return(
<>
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <span>W</span>ord <span>C</span>ounter
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link" to={'/home-page'}>HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/word-counter'}>WORD COUNTER</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/blog-nayar'}>BLOG</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/about-autor-some'}>ABOUT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={'/contact-to-tech-comp'}>COUNTER</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
)
}

