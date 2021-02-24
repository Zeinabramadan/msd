import React from 'react'
import ReactStars from "react-rating-stars-component";
import {filterStars} from '../services'
import { connect } from 'react-redux'

function Filter({dispatch}) {

	function changeRating(rating) {
		console.log(rating)
		filterStars(dispatch, rating)
	}

	return (
		<div className='filter'>
			<span>Filter by stars</span>
				<ReactStars
					count={5}
					onChange={changeRating}
					size={20}
					isHalf={true}
					activeColor="#5844AF"
					color='#f1f1f1'
				/>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		items: state.items,
		loader: state.loader,
		error: state.error
	}
}

export default connect(mapStateToProps)(Filter)
