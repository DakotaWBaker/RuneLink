import React from 'react'
import pp from './blank.png'

export default function Navbar({page, getUserProfile}) {  
  return (
<header className="p-3 text-bg-dark">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a
        href="/"
        className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
      >
        <svg
          className="bi me-2"
          width={40}
          height={32}
          role="img"
          aria-label="Bootstrap"
        >
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
        <button className = "nav-link px-2 text-white" onClick={() => page("Home")}>
                Home
              </button>
        </li>
        <li>
        <button className = "nav-link px-2 text-white" onClick={() => page("Finder")}>
                Group Finder
              </button>
        </li>
        <li>
          <button className = "nav-link px-2 text-white" onClick={() => page("Updates")}>
                Game Updates
              </button>
        </li>
        
      </ul>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input
          type="search"
          className="form-control form-control-dark text-bg-dark"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>
      <div className="text-end">
        <button type="button" className="btn btn-outline-light me-2" onClick={() => page("Login")} >
          Login
        </button>
        <button type="button" className="btn btn-warning" onClick={() => page("Register")}>
          Sign-up
        </button>
        </div>
        <div className="flex-shrink-0 dropdown p-2">
  <a
    href="#"
    className="d-block link-white text-decoration-none dropdown-toggle"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
    <img
      src= {pp}
      alt="mdo"
      width={32}
      height={32}
      className="rounded-circle"
    />
  </a>
  <ul className="dropdown-menu text-small shadow">
    <li>
      <a className="dropdown-item" href="#">
        Settings
      </a>
    </li>
    <li>
      <a className="dropdown-item" href="#"  onClick={() => page("Profile")}>
        View Profile
      </a>
    </li>
    <li>
      <hr className="dropdown-divider" />
    </li>
    <li>
      <a className="dropdown-item" href="#">
        Sign out
      </a>
    </li>
  </ul>
</div>
</div>

  </div>
</header>

  )
}
