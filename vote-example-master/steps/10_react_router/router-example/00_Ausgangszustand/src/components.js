import React from 'react'
import {Link} from 'react-router'

export function Home(){
  return <div>
    <h1>Home</h1>
    <p>Welcome auf Home</p>
    <Link to='/about'>More about us</Link>
  </div>;
}

export function About(){
  return <div>
    <h1>About</h1>
    <p>Welcome auf Home</p>
    <Link to='/'>Home</Link>
  </div>;
}
