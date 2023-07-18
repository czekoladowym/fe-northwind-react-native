import { useEffect, useState } from 'react';
import { RoundedImg } from './initialImgStyles';
import { Image } from 'react-native-svg';

interface IProps {
	initials: boolean;
	fullName: string;
}

const InitialImg = ({ initials, fullName }: IProps) => {
	const [name, setName] = useState<string>('');

	const abbreviateName = (nameToSplit: string) => {
		const nameSplitted = nameToSplit.trimEnd().split(' ');
		const nameRes = nameSplitted[0].concat(
			'-',
			nameSplitted[nameSplitted.length - 1]
		);
		return nameRes;
	};

	const abbreviateInitials = (nameToInitial: string) => {
		return nameToInitial
			.split(' ')
			.map((part) => part[0].toUpperCase())
			.join('-');
	};

	useEffect(() => {
		if (initials) {
			const abbreviateUri = `https://avatars.dicebear.com/v2/initials/${abbreviateInitials(
				fullName
			)}.png`;
			setName(abbreviateUri);
		} else {
			const abbreviateUri = `https://avatars.dicebear.com/v2/initials/${abbreviateName(
				fullName
			)}.png`;
			setName(abbreviateUri);
		}
	}, [fullName]);

	return (
		<RoundedImg
			style={{ borderRadius: 100 }}
			source={{
				uri: name,
			}}
		/>
	);
};

export default InitialImg;
