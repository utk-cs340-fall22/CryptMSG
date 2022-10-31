import './App.css'
import Chatbox from './components/Chatbox';
// import ChatSettings from './components/ChatSettings';
import Main from './components/Main';
import Navbar from './components/Navbar'

function App() {
	return (
		<>
			<Main />
			<Chatbox />
			{/* <ChatSettings /> */}
			<Navbar/>
		</>
  	);
}

export default App;
