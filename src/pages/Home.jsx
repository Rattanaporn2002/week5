import React from 'react'
import MainLayout from '../layouts/MainLayout'
import MyButton from '../MyButton'

const Home = () => {
  return (
    <MainLayout>
         <div className="mt-4 p-5 bg-primary text-white rounded">
          <h1>Jumbotron Example</h1>
          <p>Lorem ips...</p>
         </div>
         <MyButton text="Teat" color="dark"/>
         <MyButton text="Sleepind" color="Primary"/>
         <MyButton text="Play a Game" color="secondary"/>
         <MyButton text="Sleepind" color="success"/>
         <MyButton text="Sleepind" color="info"/>
         <MyButton text="Sleepind" color="warning"/>
         <MyButton text="Sleepind" color="danger"/>
         <MyButton text="Sleepind" color="dark"/>
      </MainLayout>
   
  )
}

export default Home