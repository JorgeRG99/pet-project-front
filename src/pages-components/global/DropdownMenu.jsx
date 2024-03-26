import { SheetClose } from "@/components/ui/sheet";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function DropdownMenu({ linksList, title }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible((prevIsVisible) => !prevIsVisible);
  };

  return (
    <>
      <button
        onClick={toggleVisibility}
        className="w-full h-full py-6 hover:bg-gray-200 active:bg-gray-200 cursor-pointer"
      >
        <h3>{title}</h3>
      </button>
      {isVisible && (
        <div
          onClick={toggleVisibility}
          className="w-full flex-col text-lg flex"
        >
          {linksList.map((component) => (
            <SheetClose asChild key={crypto.randomUUID()}>
              <Link
                className="py-6 font-normal hover:bg-gray-200"
                to={component.href}
              >
                {component.title}
              </Link>
            </SheetClose>
          ))}
        </div>
      )}
    </>
  );
}
