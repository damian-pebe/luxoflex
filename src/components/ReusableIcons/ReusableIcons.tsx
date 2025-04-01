import { DotsThreeOutline } from "@phosphor-icons/react";

function ThreeDotsBlack({ top = false }: { top?: boolean }) {
  return (
    <div className="w-full z-40 relative">
      <DotsThreeOutline
        className="flex justify-center items-center w-full"
        color="#FFFFFF"
        weight="duotone"
        size={32}
      />
     {top && <div className="absolute top-0 right-10 font-rajdhani text-2xl text-white/40 font-bold z-50">
        LUXOFLEX
      </div>}
    </div>
  );
}
function ThreeDotsWhite({ top = false }: { top?: boolean }) {
  return (
    <div className="w-full z-40 relative">
      <DotsThreeOutline
        className="flex justify-center items-center w-full"
        color="#000000"
        weight="duotone"
        size={32}
      />
      {top && (
        <div className="absolute top-0 right-10 font-rajdhani text-2xl text-black/40 font-bold z-50">
          LUXOFLEX
        </div>
      )}
    </div>
  );
}

export { ThreeDotsWhite, ThreeDotsBlack };
