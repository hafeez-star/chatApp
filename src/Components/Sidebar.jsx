const Sidebar = () => {
  return (
    <div className="w-[350px] bg-violet-500 text-white p-5">

      <h1 className="text-3xl font-bold mb-10">
        Chat App
      </h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-3 rounded-xl outline-none text-black"
      />

      {/* Users */}
      <div className="mt-10 space-y-4">

        <div className="bg-white/20 p-4 rounded-xl">
          Ali
        </div>

        <div className="bg-white/20 p-4 rounded-xl">
          Ahmed
        </div>

      </div>

    </div>
  );
};

export default Sidebar;