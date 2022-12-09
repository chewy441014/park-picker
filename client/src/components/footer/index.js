import React from "react"
import "./footer.css"
import GithubIcon from "../../assets/images/icons/github-mark/github-mark-white.png"

function Footer() {
  return (
    <footer className="d-flex flex-column align-items-center bg-dark">
      <div className="d-flex flex-column align-items-center">
        <div class="githubIcon">
        <h5 className="text-white mx-1 mg">Contributors <a href="https://github.com/chewy441014/park-picker" target="_blank" rel="noopener noreferrer"><img src={GithubIcon} alt="github-repo" width={35}/></a></h5>
        </div>
        <ul className="nav d-flex flex-row mt-2">
          <li className="nav-item mb-2 mx-1"><a href="https://www.linkedin.com/in/david-codner-008483251/" target="_blank" rel="noopener noreferrer" className="nav-link p-0 text-body">David Codner</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://www.linkedin.com/in/hillpreston/" target="_blank" rel="noopener noreferrer" className="nav-link p-0 text-body">Preston Hill</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://www.linkedin.com/in/michael-gostomski/" target="_blank" rel="noopener noreferrer" className="nav-link p-0 text-body">Michael Gostomski</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://www.linkedin.com/in/penelope-leung/" target="_blank" rel="noopener noreferrer" className="nav-link p-0 text-body">Penelope Leung</a></li>
          <li className="nav-item mb-2 mx-1"><a href="https://www.linkedin.com/in/chiemeka-anunkor-98ba721b0/" target="_blank" rel="noopener noreferrer" className="nav-link p-0 text-body">Chiemeka Anunkor</a></li>
        </ul>
      </div>

      <div className="d-flex flex-column align-items-center">
        <p className="text-white mb-0 mt-0">Made With 💖 & React (Copyright © 2022)</p>
        <p className="text-muted mt-0"></p>
      </div>


    </footer>
  )
};

export default Footer;
