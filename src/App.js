import React from 'react'
import { Table } from 'antd'
import 'antd/dist/antd.css'
import { columns, dataSource } from './components/ManifestViewTable'

function App() {
  return (
    <div className="App">
      <br />
      <br />
      <Table dataSource={dataSource} columns={columns} />;
    </div>
  )
}

export default App
