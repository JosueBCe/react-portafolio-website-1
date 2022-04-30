import React from 'react'
import "./service.css"
import {FaRegCheckSquare} from "react-icons/fa"

const Services = () => {
  return (
    <section id='services' >
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
          </ul>
        </article>
        {/*END OF UI/UX*/}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
          </ul>
        </article>
        {/*END OF WEB DEVELOPMENT*/}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className='service__list'>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
            <li>
              <FaRegCheckSquare/>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </li>
          </ul>
        </article>
        {/*CONTENT CREATION*/}
        
      </div>
    
    
    
    </section>
  )
}

export default Services