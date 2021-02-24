import React from 'react'
import StarRatings from 'react-star-ratings'
import { displayRating } from '../../helpers'
import { addToFavorites, removeFromFavorites } from '../services'

function Item({ item }) {
	return (
		<div className='item'>
			<img className='item-img' src={item.images} alt={item.title} />
			<div className='item-info'>
				<h2 className='item-name'>{item.title}</h2>
				<span className='item-slang'>{item.artist}</span>
				<div className='item-actions'>
					<div className='item-rating'>
						<StarRatings
							rating={displayRating(item)}
							starRatedColor='#5844AF'
							numberOfStars={5}
							name='rating'
							starDimension='15px'
							starSpacing='0'
						/>
					</div>
					<div className='item-favorite'>
						{item.favorite ? (
							<i
								className='fi flaticon-heart-1'
								onClick={() => {
									removeFromFavorites(item)
								}}
							/>
						) : (
							<i
								className='fi flaticon-heart'
								onClick={() => {
									addToFavorites(item)
								}}
							/>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Item
