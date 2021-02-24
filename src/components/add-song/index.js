import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { addSong } from '../services'

function AddSongComponent({ dispatch }) {
	const { register, handleSubmit, errors } = useForm()
	const onSubmit = data => {
		const songData = {
			...data,
			level: 1,
			search: data.artist,
			images: '',
		}

		addSong(dispatch, songData)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='add-form'>
			<input
				placeholder='Artist'
				className='input-text'
				name='artist'
				defaultValue=''
				ref={register({ required: true })}
			/>
			{errors.artist && <p>Artist is required</p>}
			<input
				placeholder='Title'
				className='input-text'
				name='title'
				defaultValue=''
				ref={register({ required: true })}
			/>
			{errors.title && <p>Title is required</p>}
			<button type='submit' value='Submit' className='button button--default'>
				Save
			</button>
		</form>
	)
}

const mapStateToProps = state => state

export default connect(mapStateToProps)(AddSongComponent)
