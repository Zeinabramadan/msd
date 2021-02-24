import React from 'react'
import ToggleButton from '../components/add-song/toggle-button'
import Filter from '../components/filter'

function FilterContainer() {
	return (
		<div className='listing-actions'>
			<Filter />
			<ToggleButton text='Add Song' reversedText='Cancel' />
		</div>
	)
}

export default FilterContainer
