import { FILTERS } from "@/static/data"

const FiltersList = () => {
  return (
    <div className="flex gap-2 items-start flex-wrap">
      {FILTERS.map((filter) => (
        <div key={filter.title} className="flex gap-1 py-1 px-2 border border-[#E2E8F0] rounded-[6px] cursor-pointer">
            <filter.icon width={16} height={16}/>
            <span className="font-medium text-[13px] text-[#020817]">{filter.title}</span>
        </div>
      ))}
    </div>
  )
}

export default FiltersList
