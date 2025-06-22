import { Container, Filters} from '@/components/shared'
import { ProductCard } from '@/components/shared/product-card'
import { ProductsGroupList } from '@/components/shared/products-group-list'
import { Title } from '@/components/shared/title'
import { TopBar } from '@/components/shared/top-bar'
import { useIntersection } from 'react-use'


export default function Home() {



  return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
				<TopBar />
				<Container className='pb-14 mt-10'>
					<div className='flex gap-[80px]'>
						<div className='w-[250px]'>
							<Filters />
						</div>
						<div className='flex-1'>
							<div className='flex flex-col gap-16'>
								<ProductsGroupList
									className='scroll-mt-25'
									title='Пиццы'
									items={[
										{
											id: 1,
											name: 'Чизбургер-пицца',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
											items: [{ price: 550 }],
										},
										{
											id: 2,
											name: 'Охотничья',
											image:
												'https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif',
											items: [{ price: 629 }],
										},
										{
											id: 3,
											name: 'Креветка и песто',
											image:
												'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
											items: [{ price: 699 }],
										},
										{
											id: 4,
											name: 'Четыре сыра',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d612a1c13cbbfcc286c332d7762.avif',
											items: [{ price: 559 }],
										},
										{
											id: 5,
											name: 'Чизбургер-пицца',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
											items: [{ price: 550 }],
										},
										{
											id: 6,
											name: 'Охотничья',
											image:
												'https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif',
											items: [{ price: 629 }],
										},
										{
											id:7,
											name: 'Креветка и песто',
											image:
												'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
											items: [{ price: 699 }],
										},
										{
											id: 8,
											name: 'Четыре сыра',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d612a1c13cbbfcc286c332d7762.avif',
											items: [{ price: 559 }],
										},
										{
											id: 9,
											name: 'Чизбургер-пицца',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
											items: [{ price: 550 }],
										},
										{
											id: 10,
											name: 'Охотничья',
											image:
												'https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif',
											items: [{ price: 629 }],
										},
										{
											id: 11,
											name: 'Креветка и песто',
											image:
												'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
											items: [{ price: 699 }],
										},
										{
											id: 12,
											name: 'Четыре сыра',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d612a1c13cbbfcc286c332d7762.avif',
											items: [{ price: 559 }],
										},
									]}
									categoryId={1}
								/>
								<ProductsGroupList
									title='Завтрак'
									items={[
										{
											id: 13,
											name: 'Чизбургер-пицца',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
											items: [{ price: 550 }],
										},
										{
											id: 14,
											name: 'Охотничья',
											image:
												'https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif',
											items: [{ price: 629 }],
										},
										{
											id: 15,
											name: 'Креветка и песто',
											image:
												'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
											items: [{ price: 699 }],
										},
										{
											id: 16,
											name: 'Четыре сыра',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d612a1c13cbbfcc286c332d7762.avif',
											items: [{ price: 559 }],
										},
										{
											id: 17,
											name: 'Чизбургер-пицца',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
											items: [{ price: 550 }],
										},
										{
											id: 18,
											name: 'Охотничья',
											image:
												'https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif',
											items: [{ price: 629 }],
										},
										{
											id: 19,
											name: 'Креветка и песто',
											image:
												'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
											items: [{ price: 699 }],
										},
										{
											id: 20,
											name: 'Четыре сыра',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d612a1c13cbbfcc286c332d7762.avif',
											items: [{ price: 559 }],
										},
										{
											id: 21,
											name: 'Чизбургер-пицца',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d61698827ee9b8db6d0aec53410.avif',
											items: [{ price: 550 }],
										},
										{
											id: 22,
											name: 'Охотничья',
											image:
												'https://media.dodostatic.net/image/r:584x584/019635b27c727302835040e5d7c27caa.avif',
											items: [{ price: 629 }],
										},
										{
											id: 23,
											name: 'Креветка и песто',
											image:
												'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif',
											items: [{ price: 699 }],
										},
										{
											id: 24,
											name: 'Четыре сыра',
											image:
												'https://media.dodostatic.net/image/r:584x584/11ee7d612a1c13cbbfcc286c332d7762.avif',
											items: [{ price: 559 }],
										},
									]}
									categoryId={2}
								/>
							</div>
						</div>
					</div>
				</Container>
			</Container>
		</>
	)
}
