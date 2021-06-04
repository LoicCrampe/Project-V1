import './Css/App.css';
import Header from './Components/Header';
import LeftSidebar from './Components/LeftSidebar';
import Center from './Components/Center';
import RightSidebar from './Components/RightSidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* Header : Contains a search bar on the left, the website logo on the middle and the user account on the right  */}
      <Header />
      <div className="main row col-12">
        {/* LeftSideBar : Contains channel favorites like Twitch on the left*/}
        <LeftSidebar />
        {/* Center : Contains a channel where anyone or specific users can post messages, images or videos and can react by leaving comments. Like Reddit.*/} 
        <Center />
        {/* RightSidebar : Contains friend contacts on the right, when clicking on a contact a chat opens to chat with it, like Facebook*/}
        <RightSidebar />
      </div>
    </div>
  );
}

export default App;
