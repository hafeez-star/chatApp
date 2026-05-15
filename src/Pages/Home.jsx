




import Sidebar from "../Components/Sidebar";
import ChatBox from "../Components/ChatBox";

const Home = () => {
  return (
    <div className="h-screen flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Chat Area */}
      <ChatBox />

    </div>
  );
};

export default Home;