interface ButtonProps {
  str: string;
}

const ButtonShadow = ({ str }: ButtonProps) => {
  return (
    <div>
      <button className="text-[1.5rem] text-[#fafafa] py-[10px] px-[20px] rounded-[10px] border-2 border-[#fafafa] bg-black shadow-[3px_3px_0px_#fafafa] cursor-pointer my-[35px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] font-serif">
        {str}
      </button>
    </div>
  );
};

export default ButtonShadow;
