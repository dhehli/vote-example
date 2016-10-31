import React from 'react'
import ReactDOM from 'react-dom'
import VotingComponent from './components/VotingComponent'
import Layout from './components/Layout'


const myProps = {
  title: "Javascript",
  count: 123,
  percent: 33
}

const vote = {
  title: 'How is your Day?',
  description: "Tell me how was your das so far?",
  choices: [
    {id: 'chocie_1', title: 'Good', count: 33},
    {id: 'chocie_2', title: 'Bad', count: 12},
    {id: 'chocie_3', title: 'Not Sure', count: 1}
  ]
}

ReactDOM.render(
  <Layout>
    <VotingComponent vote={vote} />
  </Layout>,
  document.getElementById('voteAppMountPoint')
)
