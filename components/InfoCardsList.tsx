import { INFO_CARDS } from "@/static/data";

const InfoCardsList = () => {
  return (
    <div className="grid gap-4 grid-cols-2 xl:grid-cols-4">
      {INFO_CARDS.map((card) => (
        <div
          key={card.title}
          className="py-2 px-4 border border-[#E2E8F0] shadow-[0_1px_2px_0_#0000000D] rounded-xl flex gap-3 items-center"
        >
          <span
            style={{ backgroundColor: card.bg }}
            className={`p-2 rounded-lg`}
          >
            <card.icon style={{ color: card.color }} width={36} height={36} />
          </span>

          <div className="flex flex-col">
            <p className="text-[#64748B] text-[13px]">{card.title}</p>
            <span className="text-[#020817] text-[32px] font-bold">{card.count}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCardsList;
