import './Css/App.css';
import Header from './Components/Header';
import SideBar from './Components/Sidebar';
import Content from './Components/Content';
import Contact from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* Header : Contains a search bar on the left, the website logo on the middle and the user account on the right  */}
      <Header />
      <div className="main row col-12">
        {/* SideBar : Contains channel favorites like Twitch on the left*/}
        <SideBar />
        {/* Content : Contains a channel where anyone or specific users can post messages, images or videos and can react by leaving comments. Like Reddit.*/} 
        <Content />
        {/* Contact : Contains friend contacts on the right, when clicking on a contact a chat opens to chat with it, like Facebook*/}
        <Contact />
      </div>
    </div>
  );
}

export default App;
