import React from 'react';
import ReactDOM from 'react-dom';

function Title(props) {
  return <h1>{props.label}</h1>;
}
function Header() {
  return <div className='header'><Title label='Hello, World' /></div>;
}

function Header2() {
  return <div className='header'><Title label='Hello, World2' /></div>;
}

function Danger() {
  const potentialRisk = '<b>This is raw HTML</b>';
  const html = { __html: potentialRisk };

  return <ul>
    <li>Danger: {potentialRisk}</li>
    <li>Dangerously: <span dangerouslySetInnerHTML={html} /></li>
  </ul>
}

function isError(){
  return true
}

const message = "Ein Fehler"

const labelTest = <div className={isError() ? 'error' : ''}>{message}</div>

const items = ['dominic','dani','verena'].map((e) => <li key={e}>{e}</li>)

const list = <ul>{items}</ul>



function Page() {
  return <div>
    <Header />
    <Header2 />
    <Danger />
    {list}
  </div>
}

ReactDOM.render(<Page />, document.getElementById('mountPoint'));
