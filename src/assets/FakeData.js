import mcdonaldsImage from './mcdonaldsImage.webp';
import granmasImage from './granmasImage.webp';
import pizzaImage from './pizzaImage.webp';

const granma = {
	title: 'Granma\'s Kitchen',
	minimumOrder: false,
	foodStylesList: [
		'Burgers',
		'fish',
		'breakfast'
	],
	timeToDelivery: '35-60 mins',
	distance: '0.9 mi',
	rating: '3.5*',
	imageUrl: granmasImage,
}

const mcdonalds = {
	title: 'McDonalds',
	minimumOrder: true,
	foodStylesList: [
		'Burgers',
		'Milkshakes',
		'breakfast',
		'low delivery'
	],
	timeToDelivery: '35-60 mins',
	distance: '1.2 mi',
	rating: '3.5*',
	imageUrl: mcdonaldsImage,
}

const pizza = {
	title: 'Pizzatime',
	minimumOrder: true,
	foodStylesList: [
		'Pizza',
	],
	timeToDelivery: '35-60 mins',
	distance: '1.2 mi',
	rating: '3.5*',
	imageUrl: pizzaImage,
	offer: '20% off when you spend £20'
}

const FakeData = [granma, mcdonalds, pizza, granma, mcdonalds, pizza, granma, mcdonalds, pizza, granma, mcdonalds, pizza]

export default FakeData;