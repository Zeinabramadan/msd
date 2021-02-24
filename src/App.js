import Layout from "./containers/layout";
import { Provider } from 'react-redux'
import store from './store/store'

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Layout />
			</div>
		</Provider>
	);
}

export default App;
