/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React from 'react';
import QrCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Code, NavItem, NavText, Nav } from './styles';

export default function Menu() {
  return (
		<Container>
			<Code>
				<QrCode value="https://rocketseat.com.br" size={80} bgColor="#8b10ae" fgColor="#fff" />
			</Code>

			<Nav>
				<NavItem>
					<Icon name="help-outline" size={20} color="#fff" />
					<NavText>Me Ajuda</NavText>
				</NavItem>
				<NavItem>
					<Icon name="person-outline" size={20} color="#fff" />
					<NavText>Perfil</NavText>
				</NavItem>
				<NavItem>
					<Icon name="credit-card" size={20} color="#fff" />
					<NavText>Configurar Cartão</NavText>
				</NavItem>
				<NavItem>
					<Icon name="smartphone" size={20} color="#fff" />
					<NavText>Configurações do App</NavText>
				</NavItem>
			</Nav>
		</Container>
  );
}
