import React from 'react'
import { connect } from 'react-redux'
import Header from '../components/layout/header'
import FilterContainer from './filter'
import ListingContainer from './listing'
import AddSongComponent from '../components/add-song'

function Layout({ toggle }) {
	return (
		<>
			<Header />
			<section className='listing-container'>
				<FilterContainer />
				{toggle && <AddSongComponent />}
				<ListingContainer />
			</section>
		</>
	)
}
const mapStateToProps = state => ({
	toggle: state.toggle,
})

export default connect(mapStateToProps)(Layout)
