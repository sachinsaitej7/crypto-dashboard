import React from "react";
import { AutoComplete } from "antd";
import { IoMdAddCircleOutline } from "react-icons/io";
import useDebounce from "@/hooks/useDebounce";
import useSearchCoins from "@/hooks/useSearchCoins";
import { useDashBoard } from "@/providers/DashBoardProvider";

const AutoCompleteCoinSearch: React.FC = () => {
  const inputRef = React.useRef<any>();
  const [searchText, setSearchText] = React.useState("");
  const [debouncedSearch] = useDebounce(setSearchText, { wait: 500 });
  const [dropDownVisible, setDropDownVisible] = React.useState<boolean>(false);
  const { coins: coinIds, addCoin } = useDashBoard();

  const { coins, isLoading, error } = useSearchCoins(searchText);

  return (
    <div className="flex items-center">
      <IoMdAddCircleOutline
        size={24}
        onClick={() => {
          if (dropDownVisible || isLoading) return;
          inputRef.current?.focus();
          setDropDownVisible(true);
        }}
        className="cursor-pointer hover:text-red-500"
      />
      <AutoComplete
        ref={inputRef}
        placeholder="Add Compare"
        style={{ minWidth: 200 }}
        variant="borderless"
        onSelect={(value: string) => {
          addCoin(
            value,
            coins?.find((coin) => coin.id === value),
          );
          setSearchText("");
          inputRef.current?.blur();
        }}
        onSearch={(value: string) => {
          if (value.length < 3) return;
          debouncedSearch.run(value);
        }}
        onFocus={() => {
          setDropDownVisible(true);
        }}
        onBlur={() => {
          setDropDownVisible(false);
        }}
        key={coinIds.join("")}
        open={dropDownVisible}
        popupMatchSelectWidth={false}
        notFoundContent={
          isLoading
            ? "Loading..."
            : error
              ? "Error fetching data, try again later"
              : coins?.length === 0
                ? "No results found"
                : ""
        }
      >
        {coins?.map((option) => (
          <AutoComplete.Option
            key={option.id}
            value={option.id}
            disabled={coinIds.includes(option.id)}
          >
            <div className="flex items-center gap-2 ">
              <img
                src={option.thumb}
                alt={option.name}
                className="w-6 h-6 rounded-full"
              />
              {option.name}
            </div>
          </AutoComplete.Option>
        ))}
      </AutoComplete>
    </div>
  );
};

export default AutoCompleteCoinSearch;
