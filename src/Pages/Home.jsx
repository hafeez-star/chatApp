




import Sidebar from "../components/Sidebar";
import ChatBox from "../components/ChatBox";

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