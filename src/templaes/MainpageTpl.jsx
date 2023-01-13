import React from 'react'
import Desk from '../components/Desk/Desk'
import Header from '../components/Header/Header'

function MainpageTpl() {
  return (
    <div className="d-flex flex-column h-100">
      <Header />
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-2">
            
          </div>
          <div className="col-8">
            <Desk />
          </div>
          <div className="col-2">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainpageTpl