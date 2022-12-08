import React from "react"
import "./footer.css"
import GithubIcon from "../../assets/images/icons/github-mark/github-mark-white.png"

function Footer() {
  return (
    <footer className="d-flex flex-column align-items-center bg-dark">
      <div className="d-flex flex-column align-items-center">
        
        <h5 className="text-muted mx-1">Contributors <img src={GithubIcon} alt="github-repo" width={50}/><a href="https://github.com/chewy441014/park-picker"></a></h5>
        <ul className="nav d-flex flex-row mt-2">
          <li className="nav-item mb-2 mx-1"><a href="https://www.linkedin.com/in/david-codner-008483251/" className="nav-link p-0 text-muted">David Codner |</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://www.linkedin.com/in/hillpreston/" className="nav-link p-0 text-muted">Preston Hill |</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://www.linkedin.com/in/michael-gostomski/" className="nav-link p-0 text-muted">Michael Gostomski |</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://www.linkedin.com/in/penelope-leung/" className="nav-link p-0 text-muted">Penny Leung |</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://www.linkedin.com/in/chiemeka-anunkor-98ba721b0/" className="nav-link p-0 text-muted">Chiemeka Anunkor</a></li>
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
