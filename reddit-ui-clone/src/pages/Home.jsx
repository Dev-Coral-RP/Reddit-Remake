import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen pt-14">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-grow p-6 mx-64">
          <Feed />
        </main>
        <RightSidebar />
      </div>
    </div>
  );
}
