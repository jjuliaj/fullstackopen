import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App'

const persons = []

ReactDOM.createRoot(document.getElementById('root')).render(<App persons={persons} />)