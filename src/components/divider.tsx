import { Tooltip } from "antd";

export default function Divider() {
  return (
    <div className="relative flex items-center my-8">
      <div className="flex-grow border-t border-gray-300"></div>
      <span className="flex-shrink mx-4 text-gray-500 font-medium text-lg cursor-grab">
      <Tooltip title="Gracias por confiar en Bouquet Crochet" placement="bottom">

        <i className="bi bi-heart-fill text-pink-500"></i>
        </Tooltip>
      </span>
      <div className="flex-grow border-t border-gray-300"></div>
    </div>
  );
}
