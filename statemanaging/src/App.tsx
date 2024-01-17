import './App.css'
import ExpandableText from './components/ExpandableText'

function App() {
	return (
		<ExpandableText maxChars={10}>
			Lorem, ipsum. Lorem ipsum dolor sit amet.
		</ExpandableText>
	)
}

export default App
