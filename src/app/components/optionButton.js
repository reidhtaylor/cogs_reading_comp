"use client";

const OptionButton = ({content, col}) => {
  return (<button className={`rounded-lg ${col ? col : "bg-zinc-800/20 " } px-5 py-2 hover:opacity-80 active:opacity-50`} onClick={() => alert("Hello")}>
    <h2 className={`text-sm text-white font-semibold`}>{content}</h2>
  </button>)
}

export default OptionButton;
