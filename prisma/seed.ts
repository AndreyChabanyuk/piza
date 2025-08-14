import { Prisma } from '@prisma/client'
import { categories, _ingredients, products } from './constants'
import { prisma } from './prisma-client'
import { hashSync } from 'bcrypt'

const randomDecimalNumber = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10
}

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'User Test',
				email: 'user@test.ru',
				password: hashSync('11111', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'Admin Admin',
				email: 'admin@test.ru',
				password: hashSync('11111', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		],
	})
	await prisma.category.createMany({
		data: categories,
	})
	await prisma.ingredient.createMany({
		data: _ingredients,
	})
	await prisma.product.createMany({
		data: products,
	})

	const pizza1 = await prisma.product.create({
		data: {
			name: 'Пепперони фреш',
			imageUrl: './public/assets/images/pizza/static-peperoni',
			categoryId: 1,
			ingredients: {
				connect: _ingredients.slice(0, 5),
			},
		},
	})

	const pizza2 = await prisma.product.create({
		data: {
			name: 'Сырная',
			imageUrl: './public/assets/images/pizza/static-4-cheese',
			categoryId: 1,
			ingredients: {
				connect: _ingredients.slice(5, 10),
			},
		},
	})

	const pizza3 = await prisma.product.create({
		data: {
			name: 'Чоризо фреш',
			imageUrl: './public/assets/images/pizza/static-pizza-fresh',
			categoryId: 1,
			ingredients: {
				connect: _ingredients.slice(10, 40),
			},
		},
	})

	/* await prisma.productItem.createMany({
		data: [
			{
				productId: pizza1.id,
				price: 300,
				pizzaType: 2,
				size: 30,
			},
			{
				productId: pizza1.id,
				price: 350,
				pizzaType: 1,
				size: 40,
			},
			{
				productId: pizza3.id,
				price: 250,
				pizzaType: 1,
				size: 20,
			},
		],
	}) */
	await prisma.productItem.createMany({
		data: [
			/* Пепперони фреш */
			{
				productId: pizza1.id,
				pizzaType: 1,
				price: randomDecimalNumber(190, 600),
				size: 20,
			},
			{
				productId: pizza1.id,
				pizzaType: 2,
				price: randomDecimalNumber(190, 600),
				size: 30,
			},
			{
				productId: pizza1.id,
				pizzaType: 2,
				price: randomDecimalNumber(190, 600),
				size: 40,
			},

			/* Сырная*/
			{
				productId: pizza2.id,
				pizzaType: 1,
				price: randomDecimalNumber(190, 600),
				size: 20,
			},
			{
				productId: pizza2.id,
				pizzaType: 1,
				price: randomDecimalNumber(190, 600),
				size: 20,
			},
			{
				productId: pizza2.id,
				pizzaType: 1,
				price: randomDecimalNumber(190, 600),
				size: 20,
			},
			{
				productId: pizza2.id,
				pizzaType: 2,
				price: randomDecimalNumber(190, 600),
				size: 20,
			},
			{
				productId: pizza2.id,
				pizzaType: 2,
				price: randomDecimalNumber(190, 600),
				size: 30,
			},
			{
				productId: pizza2.id,
				pizzaType: 2,
				price: randomDecimalNumber(190, 600),
				size: 40,
			},

			/* Чоризо фреш */
			{
				productId: pizza3.id,
				pizzaType: 1,
				price: randomDecimalNumber(190, 600),
				size: 20,
			},
			{
				productId: pizza3.id,
				pizzaType: 2,
				price: randomDecimalNumber(190, 600),
				size: 30,
			},
			{
				productId: pizza3.id,
				pizzaType: 2,
				price: randomDecimalNumber(190, 600),
				size: 40,
			},
		],
	})
	await prisma.cart.createMany({
		data: [
			{
				userId: 1,
				totalAmount: 0,
				token: '11111',
			},
			{
				userId: 2,
				totalAmount: 0,
				token: '222222',
			},
		],
	})

	await prisma.cartItem.create({
		data: {
			productItemId: 1,
			cartId: 1,
			quantity: 2,
			ingredients: {
				connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
			},
		},
	})
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`
	await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`
}

async function main() {
	try {
		await down()
		await up()
	} catch (e) {
		console.log(e)
	}
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
