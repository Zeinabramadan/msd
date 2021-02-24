import axios from 'axios'
import { BASE_URL } from '../api/base-url'

function fetchSongs(dispatch, search, page) {
	let URL = `${BASE_URL}/songs?_start=0&_end=${page}`

	if (search) {
		URL += `&artist=${search}`
	}

	axios
		.get(URL)
		.then(response => {
			dispatch({
				type: 'SUCCESS_FETCH',
				payload: response.data,
			})
		})
		.catch(error => {
			dispatch({
				type: 'FAILED_FETCH',
				payload: error,
			})
		})
}

function filterStars(dispatch, num) {
	let filterNumber = null

	if (Number.isInteger(num)) {
		filterNumber = num * 3
	} else {
		filterNumber = num * 3 + 0.5
	}
	const URL = `${BASE_URL}/songs?level=${filterNumber}&limit=50`

	axios
		.get(URL)
		.then(response => {
			dispatch({
				type: 'SUCCESS_FETCH',
				payload: response.data,
			})
		})
		.catch(error => {
			dispatch({
				type: 'FAILED_FETCH',
				payload: error,
			})
		})
}

function addSong(dispatch, data) {
	axios
		.post(`${BASE_URL}/songs`, data)
		.then(response => {
			if (response.status === 201) {
				alert('Song added successfully!')
				dispatch({ type: 'CLOSE_FORM' })
				fetchSongs(dispatch, null, 10)
			}
		})
		.catch(error => {
			dispatch({
				type: 'FAILED_FETCH',
				payload: error,
			})
		})
}

async function addToFavorites(item) {
	await axios
		.post(`${BASE_URL}/favorites`, item)
		.then(() => {})
		.catch(error => {
			// ignore error
		})
	axios
		.put(`${BASE_URL}/songs/${item.id}`, {
			...item,
			favorite: true,
		})
		.then(() => {})
		.catch(error => {
			// ignore error
		})
}

async function removeFromFavorites(item) {
	await axios
		.delete(`${BASE_URL}/favorites/${item.id}`)
		.then(() => {})
		.catch(error => {
			// ignore error
		})
	axios
		.put(`${BASE_URL}/songs/${item.id}`, {
			...item,
			favorite: false,
		})
		.then(() => {})
		.catch(error => {
			// ignore error
		})
}

export {
	fetchSongs,
	filterStars,
	addSong,
	addToFavorites,
	removeFromFavorites,
}
