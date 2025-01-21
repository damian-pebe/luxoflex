import { Tooltip } from "antd";

export default function Divider() {
  return (
    <div className="relative flex items-center my-8">
      {/* Left divider line */}
      <div className="flex-grow border-t border-gray-700"></div>

      {/* Centered Tooltip with gradient text */}
      <span className="flex-shrink mx-4 text-gray-300 font-medium text-lg cursor-pointer">
        <Tooltip title="Gracias por confiar en LUXOFLEX" placement="bottom">
          <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            LUXOFLEX
          </span>
        </Tooltip>
      </span>

      {/* Right divider line */}
      <div className="flex-grow border-t border-gray-700"></div>
    </div>
  );
}

export function DividerNoSpacing() {
  return (
    <div className=" flex items-center">
      {/* Left divider line */}
      <div className="flex-grow border-t border-gray-700"></div>

      {/* Centered Tooltip with gradient text */}
      <span className="flex-shrink mx-4 text-gray-300 font-medium text-lg cursor-pointer">
        <Tooltip title="Gracias por confiar en LUXOFLEX" placement="bottom">
          <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            LUXOFLEX
          </span>
        </Tooltip>
      </span>

      {/* Right divider line */}
      <div className="flex-grow border-t border-gray-700"></div>
    </div>
  );
}




