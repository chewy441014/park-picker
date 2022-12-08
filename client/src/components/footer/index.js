import React from "react"
import "./footer.css"

function Footer() {
  return (
    <footer className="d-flex flex-column align-items-center bg-dark">
      <div className="d-flex flex-column align-items-center">
        
        <ul className="nav d-flex flex-row mt-2">
          <p className="text-muted mx-1">Contributors: </p>
          <li className="nav-item mb-2 mx-1"><a href="https://github.com/dcodner24" className="nav-link p-0 text-muted">David Codner,</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://github.com/chewy441014" className="nav-link p-0 text-muted">Preston Hill,</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://github.com/mg8955" className="nav-link p-0 text-muted">Michael Gostomski,</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://github.com/penelope-leung" className="nav-link p-0 text-muted">Penny Leung,</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://github.com/ChiemekaAnunkor" className="nav-link p-0 text-muted">Chiemeka Anunkor</a></li>
        </ul>
      </div>

      <div className="d-flex flex-column align-items-center">
        <p className="text-muted mb-0 mt-0">Made With 💖 & React (Copyright © 2022)</p>
        <p className="text-muted mt-0"></p>
      </div>


    </footer>
  )
};

export default Footer;
