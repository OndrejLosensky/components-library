"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

interface SidebarItem {
  name: string;
  path: string;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const sidebarSections: SidebarSection[] = [
  {
    title: "Overview",
    items: [
      { name: "Getting Started", path: "/" },
    ]
  },
  {
    title: "Inputs",
    items: [
      { name: "Button", path: "/button" },
      { name: "Input", path: "/input" },
      { name: "Select", path: "/select" },
      { name: "Checkbox", path: "/checkbox" },
      { name: "Toggle", path: "/toggle" },
      { name: "Slider", path: "/slider" },
    ]
  },
  {
    title: "Layout",
    items: [
      { name: "Card", path: "/card" },
      { name: "Table", path: "/table" },
      { name: "Accordion", path: "/accordion" },
    ]
  },
  {
    title: "Overlay",
    items: [
      { name: "Dropdown", path: "/dropdown" },
      { name: "Drawer", path: "/drawer" },
      { name: "Alert", path: "/alert" },
      { name: "Tooltip", path: "/tooltip" },
    ]
  }
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full overflow-y-auto">
      <div className="">
        <div className="py-6 px-6 border-b border-gray-200">
          <h2 className="font-bold text-xl mb-4 text-gray-800">
            UI Components
          </h2>
          <p className="text-sm text-gray-500">
            A collection of reusable React components
          </p>
        </div>
        
        <nav className="space-y-8 mt-6 p-4">
          {sidebarSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="space-y-2">
              <h3 className="font-semibold text-[13px] text-gray-900 px-2 uppercase tracking-wider">
                {section.title}
              </h3>
              <div className="space-y-1">
                {section.items.map((item, itemIndex) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={itemIndex}
                      href={item.path}
                      className={clsx(
                        "block px-3 py-2 text-[14px] rounded-md transition-colors duration-200",
                        isActive 
                          ? "text-blue-600 bg-blue-50 hover:bg-blue-50" 
                          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100/80"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
