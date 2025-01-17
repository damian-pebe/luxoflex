const ButtonHoverTitle = () => {
  return (
    <div className="button-container">
      <button className="font-vt323 animate-bounce relative p-0 m-0 bg-transparent border-none cursor-pointer text-3xl uppercase font-bold text-transparent tracking-wide">
        <span className="actual-text transition-colors duration-1000 inline-block">
          &nbsp;luxoflex&nbsp;
        </span>
        <span
          aria-hidden="true"
          className="hover-text absolute inset-0 text-transparent bg-gradient-to-r from-blue-400 via-pink-500 to-pink-400 bg-clip-text transition-all duration-1000 hover:drop-shadow-[0_0_23px_#ff55cc]"
        >
          &nbsp;LUXOFLEX&nbsp;
        </span>
      </button>
    </div>
  );
}

export default ButtonHoverTitle;
