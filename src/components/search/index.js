import React, { useState } from 'react'
import { connect } from 'react-redux'
import './styles.scss'
import { fetchSongs } from '../services'

function Search({ dispatch }) {
	const [inputValue, setInputValue] = useState('')

	function handleChange(e) {
		setInputValue(e.target.value)
		if (e.target.value === '') {
			fetchSongs(dispatch, null, 10)
		}
	}

	function handleSubmit(e) {
		e.preventDefault()
		fetchSongs(dispatch, inputValue, 10)
	}

	return (
		<div className='search'>
			<form onSubmit={handleSubmit}>
				<label htmlFor='search' hidden>
					search
				</label>
				<input
					type='text'
					placeholder='Search with artist...'
					id='search'
					className='input-text'
					value={inputValue}
					onChange={handleChange}
				/>
				<button type='submit' value='Submit' className='search-icon'>
					<i className='fi flaticon-loupe' />
				</button>
			</form>
		</div>
	)
}

const mapStateToProps = state => ({
	items: state.items,
	loader: state.loader,
	error: state.error,
})

export default connect(mapStateToProps)(Search)
