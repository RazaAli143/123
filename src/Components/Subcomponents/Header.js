import React from 'react'

export default function () {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <a className="navbar-brand" href="/">Raza Ali</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

  <div className="collapse navbar-collapse d-flex" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">About</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Contact us</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">User</a>
      </li>    
    </ul>
  </div>
</nav>
    </div>
  )
}
