const categories = [
    "Popular", "Internet Culture", "Games", "Q&As", "Technology", "Pop Culture", "Movies & TV"
  ];
  
  export default function Sidebar() {
    return (
      <aside className="w-64 p-4 bg-white shadow-md fixed h-screen top-14">
        <h2 className="font-bold text-lg mb-2">Topics</h2>
        <ul className="space-y-2">
          {categories.map((category, index) => (
            <li key={index} className="text-gray-600 cursor-pointer hover:text-black">
              {category}
            </li>
          ))}
        </ul>
      </aside>
    );
  }
  