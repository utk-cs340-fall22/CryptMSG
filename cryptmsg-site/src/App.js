import './App.css'
import Chatbox from './Pages/Chatbox';
import ChatSettings from './Pages/ChatSettings';
import Main from './Pages/Main';
import Navbar from './components/Navbar'

function App() {
	return (
		<>
			<Main />
			<Chatbox />
			<ChatSettings />
			<Navbar/>
		</>
  	);
}

export default App;
