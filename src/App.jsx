import { useState } from 'react'
import './App.css'
import Checklist from './components/Checklist'
import { checklistItems } from './components/checkListItems'

function App() {


  return (
    <div className='App'>
     <header className='App-header'>
      <h1>React Developer Checklist</h1>
      <Checklist items={checklistItems}/>
     </header>
    </div>
  )
}

export default App
