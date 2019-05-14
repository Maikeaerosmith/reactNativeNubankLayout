/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React from 'react';

import logo from '~/assets/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Top, Logo, Title } from './styles';

export default function Header() {
  return (
		<Container>
			<Top>
				<Logo source={logo} />
				<Title>Maicon</Title>
			</Top>
			<Icon name="keyboard-arrow-down" size={20} color="#fff" />
		</Container>
  );
}
