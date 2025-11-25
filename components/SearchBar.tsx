import { Search } from "lucide-react"


const SearchBar = () => {
  return (
    <div dir="rtl" className="hidden sm:flex items-center gap-2 rounded-md px-2 py-2 w-[256px] bg-[#F5F7FA] shadow-[0px_1px_2px_0px_#0000000D]">
      <Search className="w-4 h-4 text-[#64748B]"/>
      <input type="text" id="search" placeholder="بحث..." className="text-sm outline-0 text-[#64748B]"/>
    </div>
  )
}

export default SearchBar
