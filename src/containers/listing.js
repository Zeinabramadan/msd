import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Item from '../components/listing/item'
import { fetchSongs } from '../components/services'

function ListingContainer({ items, loader, error, dispatch }) {
	const [page, setPage] = useState(10)

	let num = 10
	const infiniteScroll = () => {
		// End of the document reached?
		if (
			window.innerHeight + document.documentElement.scrollTop
			=== document.documentElement.offsetHeight
		) {
			console.log(num++)
			fetchSongs(dispatch, null, num)
		}
	}

	useEffect(() => {
		if (page) {
			setPage(num++)
			window.addEventListener('scroll', infiniteScroll)
		}
		fetchSongs(dispatch, null, 10)
	}, [])

	if (loader) {
		return <div>Loading songs</div>
	}

	if (error) {
		return (
			<div className='error'>
				Failed to load songs, Please try again later!
			</div>
		)
	}

	if (items.length === 0) {
		return <div>No songs found.</div>
	}

	return (
		<>
			{items.map(song => (
				<Item key={song.id} item={song} />
			))}
		</>
	)
}

const mapStateToProps = state => ({
	items: state.items,
	loader: state.loader,
	error: state.error,
})

export default connect(mapStateToProps)(ListingContainer)
