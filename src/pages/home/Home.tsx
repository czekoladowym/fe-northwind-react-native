import Header from '@components/header/Header';
import Sidebar from '@components/sidebar/Sidebar';
import { useState } from 'react';
import {
	Link,
	MainContent,
	MainImage,
	MainText,
	SubText,
	SubTitle,
	Title,
} from './homeStyles';
import { Linking, TouchableOpacity, Text } from 'react-native';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handleLinkPress = (url: string) => {
		Linking.openURL(url);
	};
	return (
		<>
			{/* <Header isOpen={isOpen} setOpen={() => setIsOpen(!isOpen)} /> */}
			<Sidebar isOpen={isOpen} />
			<MainContent isOpen={isOpen}>
				<Title>Welcome to Northwind Traders</Title>
				<SubTitle>Running on Cloudflare's D1</SubTitle>
				<MainImage
					source={{
						uri: 'https://imagedelivery.net/4wj01aQOZZ0hemsvbxWAvA/763bcbcd-da6d-46ec-f5e1-70c1c1a33d00/public',
					}}
				/>
				<MainText>
					This is a demo of the Northwind dataset, running on{' '}
					<Link
						onPress={() => handleLinkPress('https://workers.cloudflare.com/')}
					>
						Cloudflare Workers
					</Link>
					, and D1 - Cloudflare's newest SQL database, running on SQLite.
				</MainText>
				<SubText>
					Read our{' '}
					<Link
						onPress={() =>
							handleLinkPress(
								'https://blog.cloudflare.com/d1-turning-it-up-to-11/'
							)
						}
					>
						most recent D1 announcement
					</Link>{' '}
					to learn more about D1.
				</SubText>
				<SubText>
					This dataset was sourced from{' '}
					<Link
						onPress={() =>
							handleLinkPress('https://github.com/jpwhite3/northwind-SQLite3')
						}
					>
						northwind-SQLite3
					</Link>
					.
				</SubText>
				<SubText>
					You can use the UI to explore Supplies, Orders, Customers, Employees
					and Products, or you can use search if you know what you're looking
					for.
				</SubText>
			</MainContent>
		</>
	);
};

export default Home;
