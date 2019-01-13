import React from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components'


const Repair = styled.div`
	color: #464646;
	font-size: 18px;
	font-weight: 300;
	line-height: 22px;
`
const WorkTime = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span {
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`
const Calls = styled.div`
	color: #2a2a2a;
	font-size: 12px;
	font-weight: 300;
	line-height: 24px;

	span {
		display: block;
		color: #464646;
		font-size: 21px;
		font-weight: 700;
	}
`
const CallButton = styled.button`
	width: 176px;
	height: 48px;
	background: #3fc7db;
	background: -moz-linear-gradient(left, #3fc7db 0%, #35a1b1 100%);
	background: -webkit-linear-gradient(left, #3fc7db 0%,#35a1b1 100%);
	background: linear-gradient(to right, #3fc7db 0%,#35a1b1 100%);
	filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#3fc7db', endColorstr='#35a1b1',GradientType=1 );
	border-radius: 30px;
	color: #fff;
	font-size: 14px;
	font-weight: 400;
	line-height: 22.04px;
	border: none;
	border-bottom: 4px solid #35a1b1;
	-webkit-transition: 0.3s ease-in-out;
  -o-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;

	&:hover {
		border-bottom: 0px solid #35a1b1;
		-webkit-transition: 0.3s ease-in-out;
    -o-transition: 0.3s ease-in-out;
    transition: 0.3s ease-in-out;
	}
`

class Adress extends React.Component {
	render () {
		return (
				<span> {this.props.addr} </span>
			)
	}
}
class TellNumber extends React.Component {
	render () {
		return (
				<span> {this.props.tel} </span>
			)
	}
}



class Menu extends React.Component {
	render(){
		return(
			<Row>
					<Col lg={3} md={3} sm={3} xs={3}>
						<Repair>
						 	Ремонт айфонов в сервисном центре и на выезде
						</Repair>
					</Col>
					<Col lg={3} md={3} sm={3} xs={3} lgOffset={1} mdOffset={1} smOffset={1} xsOffset={1}>
					<WorkTime> 
							Пн-Пт с 10 до 20, сб,вс с 11 до 18
							<Adress addr="Ленинская, 301"/>
					</WorkTime>
					</Col>
					<Col lg={3} md={3} sm={3} xs={3}>
						<Calls> 
							Звонки принимаются 24 часа
							<TellNumber tel="099 228 32 52"/>
						</Calls>
					</Col>
					<Col lg={2} md={2} sm={2} xs={2}>
						<CallButton> Заказать звонок! </CallButton>
					</Col>
			</Row>
			)
	}
}

export default Menu