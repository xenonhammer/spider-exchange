function CurrencyItem(props: { currency: [string, number] }) {
  return <li className="border border-gray-200 p-[10px] rotete-[10px] ">
    <div className="flex justify-between">
      <div>{props.currency?.[0]}</div>
      <div>{props.currency?.[1]}</div>
    </div>
  </li>;
}

export default CurrencyItem;