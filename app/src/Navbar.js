import React from 'react'
import pp from './assets/blank.png'
import Login from './Login'
import Register from './Register'

export default function Navbar({page, getUserProfile}) {  
  let login = ''
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
        <button type="button" className="btn loginButton btn-outline-light me-2"  data-bs-toggle="modal" data-bs-target="#exampleModal" data-backdrop="false"> 
          Login
        </button>
        <button type="button" className="btn btn-outline-light"  data-bs-toggle="modal" data-bs-target="#registerModal" data-backdrop="false">
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
<div
  className="modal fade"
  id="exampleModal"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">
          Modal title
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body h-100 w-100">
        <Login />
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
<div
  className="modal fade"
  id="registerModal"
  tabIndex={-1}
  aria-labelledby="exampleModalLabel"
  aria-hidden="true"
>
  <div className="modal-dialog modal-dialog-centered modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">
          Modal title
        </h1>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div className="modal-body h-100 w-100">
        <Register />
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button type="button" className="btn btn-primary">
          Save changes
        </button>
      </div>
    </div>
  </div>
</div>
</div>
</header>

  )
}
// onClick={() => page("Login")}