

'use client';
const SearchPage = () => {


  return (
<>

<div className="h-[100vh] w-[100%]  flex items-center justify-center flex-col">
    <h1 className="text-white pt-3 pb-2">Search</h1>
   <div className="h-[100%] w-[40%] bg-[#181818]  rounded-t-[10px] overflow-auto scrollbar-none pb-5">
     <div className="px-3 w-[100%] h-20  flex items-center justify-center px-7 ">
     <input 
  type="search" 
  required 
  className="w-[97%]  h-12 bg-black text-white border-2 border-gray-600 rounded-[15px] px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out duration-300 placeholder-gray-400 "
  placeholder="Search..."
  aria-label="Search"
/>

    </div>


      


     </div>
   </div>


</>
  );
};

export default SearchPage;
