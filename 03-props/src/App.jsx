import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Sujith' img="https://plus.unsplash.com/premium_photo-1761297666287-134798741b2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=600" /> 
      <Card user='Ayush' img="https://images.unsplash.com/photo-1761197940460-75fce9b208f3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=60&w=600" /> 
     
    </div>
  )
}

export default App
