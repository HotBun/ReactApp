import React from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Slider from './slider';


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
	background: #ffa14b;
	background: -moz-linear-gradient(left, #ffa14b 0%, #905e30 100%);
	background: -webkit-linear-gradient(left, #ffa14b 0%,#905e30 100%);
	background: linear-gradient(to right, #ffa14b 0%,#905e30 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffa14b', endColorstr='#bf7c3e',GradientType=1 );
	border-radius: 30px;
	color: #fff;
	font-size: 18px;
	font-weight: 700;
	border: none;
	margin-top: 32px;
	border-bottom: 4px solid #905e30;
	-webkit-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

  &:hover {
  	border-bottom: 0px solid #905e30;
		-webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
  }
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
							<Slider />
					</Col>
				</Row>
			)
	}
}

export default Main