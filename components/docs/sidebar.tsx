import { useState } from "react";

type Props = {
  sidebarData: { [key: string]: string[] };
};
export default function DocumentationSidebar({
  sidebarData,
}: Props) {
  const [sidebarNavOpen, setSidebarNavOpen] = useState<boolean>(false);
  const [sidebarLinkOpen, setSidebarLinkOpen] = useState<number | null>(null);

  return (
    <aside className="relative my-12 md:my-0 md:w-64 md:mr-12 lg:mr-20 md:shrink-0">
      <div className="sticky top-28">
        <button
          className="flex items-center justify-between text-lg font-medium text-gray-900 w-full my-4 md:hidden"
          onClick={(e) => {
            e.preventDefault();
            setSidebarNavOpen(!sidebarNavOpen);
          }}
        >
          <span>Docs navigation</span>
          <svg
            className="w-3 h-3 fill-current text-blue-600 shrink-0 ml-2"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                sidebarNavOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                sidebarNavOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>

        {/* Docs nav */}
        <nav className={`md:block ${!sidebarNavOpen && "hidden"}`}>
          <ul className="font-medium -my-2">
            {/* 1st level */}
            {Object.keys(sidebarData).map((k, i) => (
              <li className="py-2">
                <a
                  className="flex items-center hover:underline"
                  href="#0"
                  onClick={(e) => {
                    e.preventDefault();
                    if (sidebarLinkOpen == i) {
                      setSidebarLinkOpen(null);
                    } else {
                      setSidebarLinkOpen(i);
                    }
                  }}
                  aria-expanded={sidebarLinkOpen == i}
                >
                  {/*START*/}
                  <div className="flex items-center grow">
                    <span>{k}</span>
                  </div>
                  <svg
                    className="w-3 h-3 fill-current text-gray-400 cursor-pointer ml-1 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 4.305L5.989 8.598 1.695 4.305A1 1 0 00.28 5.72l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414z" />
                  </svg>
                </a>
                {/* 2nd level */}
                <ul
                  className={`font-normal -mb-1 mt-1 ml-2 pl-5 border-l border-gray-300 ${
                    !(sidebarLinkOpen == i) && "hidden"
                  }`}
                >
                  {sidebarData[k].map((filename) => (
                    <li className="py-1">
                      <a
                        className="text-gray-600 hover:underline"
                        href="#installation"
                      >
                        {filename}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            {/* END */}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
