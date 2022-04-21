import React, {SetStateAction, useEffect, useState} from 'react';
import dayjs from 'dayjs';
import {TitleMain} from "src/components/share/Titles";
import CurrencyItem from "src/components/Home/components/Desk/CurrencyItem";
import useGetCurrencyList from "src/components/Home/useGetCurrencyList";

interface IResp {
  date: string;
  base: string;
  rates: { [key: string]: number};
  status: boolean
}

const Desk = () => {
  const { status, data } = useGetCurrencyList();
  const [mainList, setMainList] = useState<SetStateAction<IResp['rates'] | undefined>>({});
  const [day, setDay] = useState<string>("");
  
  
  useEffect(() => {
    if (status) {
      const dayFormat = dayjs(data?.date).format("YYYY-MM-DD");
      setMainList(data?.rates);
      setDay(dayFormat);
    }
  }, [status, data]);
  
  return (
    <div>
      <TitleMain type="h3">Последнее обновление: {day ?? 'no date'}</TitleMain>
      <TitleMain type="h3">Валюта: {data?.base ?? 'no currency'}</TitleMain>
  
      
      
      <ol className="m-auto max-w-[500px] flex flex-col gap-[8px]">
        {Object.entries(mainList ?? {}).map(currency => (
          <CurrencyItem currency={currency}/>
        ))}
      </ol>
    </div>
  );
};

export default Desk;