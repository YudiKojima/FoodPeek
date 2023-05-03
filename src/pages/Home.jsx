import React from 'react'

import hamburguer from '../assets/hamburguerpng.png'
import './styles.css'

function Home() {
  return (
    <main>
      <section className='home'>
        <div className='homeText'>
          <h4 className='textH4'>
            Welcome Food Peek
          </h4>
          <h1 className='textH1'>
            Different spice for different tastes
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quia cumque sunt placeat sit velit, at ex minus sequi voluptatem esse voluptas, temporibus inventore eum aspernatur suscipit consectetur asperiores modi!
          </p>
          <a href="#menu">Order yours</a>
        </div>
        <div className='homeImage'>
          <img src={hamburguer} alt="imagehamburguer" />
        </div>
      </section>
    </main>
  )
}

export default Home