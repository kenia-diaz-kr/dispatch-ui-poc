import React from 'react'
import { Button } from 'antd'
import './App.css'
import { KdsButton } from 'kds-stencil-react'
import 'kds-stencil-react/dist/kds-reset.css'
import 'kds-stencil-react/dist/kds-components.css'
import 'kds-stencil-react/dist/kds-utils.css'

const App = () => (
  //Responsive desging
  <div className="flex text-default-900">
    <div className="w-64 h-64 p-8 mr-16 bg-brand-900 text-default-50">900</div>
    <div className="w-64 h-64 p-8 mr-16 bg-brand-800 text-default-50">800</div>
    <div className="w-64 h-64 p-8 mr-16 bg-brand-700 text-default-50">700</div>
    <div className="w-64 h-64 p-8 mr-16 bg-brand-600 text-default-50">600</div>
    <div className="w-64 h-64 p-8 mr-16 bg-brand-500">500</div>
    <div className="w-64 h-64 p-8 mr-16 bg-brand-400">400</div>
    <div className="w-64 h-64 p-8 mr-16 bg-brand-300">300</div>
    <div className="w-64 h-64 p-8 mr-16 bg-brand-200">200</div>
    <div className="w-64 h-64 p-8 mr-16 bg-brand-100">100</div>
    <div className="w-64 h-64 p-8 mr-16 bg-brand-50">50</div>
    <span className="block md:inline-block w-full md:w-auto bg-brand-900 text-default-50 p-16 mb-16 md:mb-0 md:mr-16">
      foo
    </span>
    <span className="block md:inline-block w-full md:w-auto bg-brand-600 text-default-50 p-16">
      bar
    </span>
    <button className="bg-action-800 hover:bg-action-900 focus:bg-action-900 text-default-50 font-small rounded-full py-12 px-16">
      Pasa sobre mi
    </button>
    {/*Trying Kds Components*/}
    <KdsButton
      kind="primary"
      compact={true}
      name="demoButton"
      disabled={false}
      onClick={() => alert('Button Clicked!')}
    >
      Stencil Button in React
    </KdsButton>
    
  </div>
)

export default App
