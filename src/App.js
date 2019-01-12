import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'

class App extends Component {
  render() {
    return (
      	<div className="wrapper">
					<SayFullName name="Vasiliy" surname="Oleinik" link="google.com" />
					<SayFullName name="Ivan" surname="Petrovich" link="google.com" />
					<SayFullName name="Petr" surname="Osipov" link="google.com" />
		</div>
    );
  }
}

function SayFullName(props) {
	return(
		<div>
			<h1> Мое имя {props.name}, Фамилия - {props.surname}</h1>
			<a href={props.link}>Моя ссылка</a>
			</div>
		)
}

export default App;
