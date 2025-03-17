import { DotsThreeOutline } from "@phosphor-icons/react";

function ThreeDotsBlack() {
  return (
    <div className="w-full">
      <DotsThreeOutline
        className="flex justify-center items-center w-full"
        color="#FFFFFF"
        weight="duotone"
        size={32}
      />
    </div>
  );
}
function ThreeDotsWhite() {
  return (
    <div className="w-full">
      <DotsThreeOutline
        className="flex justify-center items-center w-full"
        color="#000000"
        weight="duotone"
        size={32}
      />
    </div>
  );
}

export {ThreeDotsWhite, ThreeDotsBlack}
