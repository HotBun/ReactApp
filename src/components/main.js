import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'


const Repair = styled.div`
	color: #fff;
	font-weight: 700;
	font-size: 40px;
	line-height: 50px;
	span {
		display: block;
		font-size: 24px;
		line-height: 30px;
	}
`
const LightText = styled.div`
	color: #fff;
	font-weight: 300;
	font-size: 18px;
	line-height: 24px;
	margin-top: 54px;
`
const CallBtn= styled.button`
	width: 247px;
	height: 67px;
	background-color: #ffa14b;
	border-radius: 30px;
	color: #fff;
	font-size: 18px;
	font-weight: 700;
	border: none;
	margin-top: 32px;
`

class Main extends React.Component {
	render(){
		return(
				<Row>
					<Col lg={5} md={5} sm={5} xs={5}>
					<Repair>
							Качественный ремонт
							<span>iPhone за 35 минут и гарантия 1 год</span>
					</Repair>
					<LightText>
							Оставьте заявку на бесплатную диагностику без очереди,
							и получите защитное стекло, стоимостью 1000 рублей,
							с установкой в подарок!
					</LightText>
					<CallBtn> Отправить заявку! </CallBtn>
					</Col>
					<Col lg={6} md={6} sm={6} xs={6} lgOffset={1} mdOffset={1} smOffset={1} xsOffset={1}>

					</Col>
				</Row>
			)
	}
}

export default Main