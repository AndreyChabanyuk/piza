import { Container, Filters} from '@/components/shared'
import { ProductCard } from '@/components/shared/product-card'
import { Title } from '@/components/shared/title'
import { TopBar } from '@/components/shared/top-bar'



export default function Home() {
  return (
		<>
			<Container className='mt-10'>
				<Title text='Все пиццы' size='lg' className='font-extrabold' />
				<TopBar />
				<Container className='pb-14 mt-10'>
					<div className='flex gap-[60px]'>
						<div className='w-[250px]'>
							<Filters />
						</div>
						<div className='flex-1'>
							<div className='flex flex-col gap-16'>
								<ProductCard
									id={0}
									name='Креветка и песто'
									price={550}
									image={
										'https://media.dodostatic.net/image/r:584x584/019591b642d87304a62d322945990861.avif'
									}
								/>
							</div>
						</div>
					</div>
				</Container>
			</Container>
		</>
	)
}
