import React from 'react'
import ReactDOM from 'react-dom'
import ChoiceBar from './components/ChoiceBar'

const myProps = {
  title: "Javascript",
  count: 123,
  percent: 33
}

ReactDOM.render(
  <ChoiceBar {...myProps} />,
  document.getElementById('voteAppMountPoint')
)
