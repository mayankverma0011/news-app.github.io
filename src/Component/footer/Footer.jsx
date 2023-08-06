import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className="cantainer-fluid  " id="footer">

        <div className="mk">
          <div className="first">
            <h5>Ne<span>W</span>sApp</h5>
          </div>
          <div className="second">
            <NavLink to="https://github.com/mayankverma0011" target='_blank' ><i class="fa-brands fa-github fa-beat" style={{ color: "black" }}></i></NavLink>
            <NavLink to="https://www.linkedin.com/in/mayank-kumar-bb80a621b/" target='_blank' ><i class="fa-brands fa-linkedin fa-beat" style={{ color: "blue" }}></i></NavLink>
            <NavLink to="https://www.freelancer.in/u/mv3525074" target='_blank'><i class="fa-brands fa-instagram fa-beat" style={{ color: "red" }}></i></NavLink>
            <NavLink to="https://www.google.com/" target='_blank'><i class="fa-brands fa-google fa-beat"></i></NavLink>
          </div>
          <div className="thrid">
           <h2 > Subscribe to get <span >important </span>headlines</h2> 
          </div>
        </div>

        <div className="foot">
          <div className="2st">
            <h1>website link</h1>
            <li>home</li>
            <li>business</li>
            <li>Enrerrtainmet</li>
            <li>Health</li>
            <li>sports</li>
            <li>Technology</li>
          </div>
          <div className="1st">
            <h1>Resorces</h1>
            <li ><NavLink to="https://newsapi.org/" target='_blank'>NewsApi</NavLink></li>
            <li ><NavLink to="https://getbootstrap.com/docs/5.0/getting-started/introduction/" target='_blank'>Bootstrap</NavLink></li>
            <li ><NavLink to="https://fontawesome.com/v5/docs/web/use-with/wordpress/install-manually" target='_blank'>fontAwesome</NavLink></li>
            <li ><NavLink to="https://www.npmjs.com/" target='_blank'>Npm</NavLink></li>
            <li ><NavLink to="" target='_blank'>Google map</NavLink></li>
            <li ><NavLink to="https://neumorphism.io/#e0e0e0" target='_blank'>shadow Genrator</NavLink></li>
          </div>
          <div className="3st">
            <h1>social media</h1>
            <li><NavLink to="https://github.com/mayankverma0011" target='_blank'>Github</NavLink></li>
            <li><NavLink to="https://www.linkedin.com/in/mayank-kumar-bb80a621b/" target='_blank'>Linkdin</NavLink></li>
            <li><NavLink to="https://www.freelancer.in/u/mv3525074" target='_blank'>Instagram</NavLink></li>
            <li><NavLink to="https://www.google.com/" target='_blank'>Google</NavLink></li>
          </div>

           <div className="from">
            <input type="text" placeholder="Username.."required />
            <input type='email'  placeholder="Email.."  required/>
            <button id='btn2'>submit</button>
        </div>
        </div>
       
      </div>

    </>
  )
}

export default Footer