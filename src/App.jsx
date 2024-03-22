import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <h2>38-2 What Is Component,Component Types, Build Your First Component</h2>
      <h3>38-3 JSX, Its Rules And Add Dynamic Content To JSX In Your First Component</h3>
      <h2>38-4 Explore JSX And Props Basics</h2>
      <h3>38-5 Prop Types And How To Pass/Read A Prop</h3>
      <h2>38-6 Read Only Props Two Way Of Conditional Rendering------teke soro hobe</h2>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student name='sohel' age='22' id ='17'></Student>
      <Student name='shahid' age='22' id ='19'></Student>
      <Student name='sumi' age='12' id ='117'></Student>
      <Student></Student>
      <Developer></Developer>
      <Developer></Developer>
      {/* <Device name:"laptop" price:"55000"></Device> */}
      <Device name = "laptop" price = "55000"></Device>
      <Device name = "mobile" price = "25000"></Device>
    </>
  )
}

function Person(){
  const age = 32;
  const money = 22;
  const std = {name :"Sohel",age:25}
  return(
    // <h4>I am Sohel Shahid</h4>
    <>
      {/* <h4>I am Sohel Shahid</h4> */}
      <h4>I am {std.name} Shahid.Age is {age}.Money is {money}</h4>
    </>
  )
}

function Student(props){
  return(
    <div className='student'>
      <h2>I am :{props.name}</h2>
      <h3>My age :{props.age}</h3>
      <h4>My id is :{props.id}</h4>
    </div>
  )
}

function Developer(){
  const devoStyle = {
    border : '2px solid red',
    margin :"10px",
    padding:'20px',
    backgroundColor:'orange',
    borderRadius:'20px'
  }
  return(
    <div style={devoStyle}>
      <h2>Devo devo devo</h2>
      <p>Coding coding:</p>
    </div>
  )
}
function Device(props){
  console.log(props)
  return <h2>this device is : {props.name} & price is : {props.price}</h2>
}
export default App
