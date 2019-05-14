/* eslint-disable linebreak-style */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint-disable no-tabs */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable linebreak-style */
import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Annottation,
  Title,
  Description
} from './styles';

export default function Main() {
  return (
		<Container>
			<Header />
			<Content>
				<Menu />
				<Card>
					<CardHeader>
						<Icon name="attach-money" size={28} color="#666" />
						<Icon name="visibility-off" size={28} color="#666" />
					</CardHeader>
					<CardContent>
						<Title>Saldo Disponível</Title>
						<Description>R$ 197.611,65</Description>
					</CardContent>
					<CardFooter>
						<Annottation>
							Transferência de R$ 20,00 recebida de Maicon Gabriel Friedel hoje às 06:00h
						</Annottation>
					</CardFooter>
				</Card>
			</Content>
			<Tabs />
		</Container>
  );
}
