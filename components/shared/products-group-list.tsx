import React from 'react'
import { Title } from './title'
import { cn } from '@/lib/utils'
import { ProductCard } from './product-card'

interface Props {
	title: string
	className?: string
	listClassName?: string
	categoryId: number
	products: any
	items: any[]
}

export const ProductsGroupList: React.FC<Props> = ({
	title,
	items,
	listClassName,
	categoryId,
	className,
}) => {
	return (
		<div className={className}>
			<Title text={title} size='lg' className='font-extrabold mb-5' />
			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{items.map((product, i) => (
					<ProductCard
						key={product.id}
						id={product.id}
						name={product.name}
						image={product.image}
						price={product.items[0].price}
					></ProductCard>
				))}
			</div>
		</div>
	)
}
