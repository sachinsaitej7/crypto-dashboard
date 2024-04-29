import { IoMdClose } from "react-icons/io";
import { Coin } from "@/types";

interface CoinTabProps {
  onRemove: () => void;
  color: string;
  data: Partial<Coin> | undefined;
}

const CoinTab: React.FC<CoinTabProps> = ({ onRemove, color, data }) => {
  if (!data) return;

  return (
    <div
      className={`hover:bg-${color}-400 bg-${color}-200 text-sm p-2 rounded-lg flex items-center gap-2 cursor-pointer text-slate-700`}
    >
      <img src={data.large} alt={data.name} className="w-4 h-4 rounded-full" />
      {data.name}
      <IoMdClose size={16} onClick={onRemove} />
    </div>
  );
};

export default CoinTab;
