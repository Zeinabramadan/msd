import React from 'react'
import { connect } from 'react-redux'

function ToggleButton({ text, toggle, reversedText, dispatch }) {
	function switchButton() {
		dispatch({ type: 'ADD_SONG' })
	}

	return (
		<button
			type='button'
			className='button button--default'
			onClick={switchButton}
		>
			{toggle ? reversedText : text}
		</button>
	)
}

const mapStateToProps = state => ({
	toggle: state.toggle,
})

export default connect(mapStateToProps)(ToggleButton)
