import Link from "next/link"; 

// Define the types for each sidebar item
interface SidebarItem {
  name: string;
  path: string;
}

export default function Sidebar() {
  // Sidebar components array declared inside the component
  const sidebarComponents: SidebarItem[] = [
    { name: "Button", path: "/button" },
  ];

  return (
    <div className="w-1/5 bg-neutral-200 h-screen p-2 px-4 flex flex-col space-y-2">
      <div className="text-2xl font-bold text-center py-2 pb-4 border-b border-black/20">
        UI Library
      </div>
      <div>
        <input type="search" placeholder="search something..." className="px-4 py-2 rounded-md border border-black/30 w-full" />
      </div>

      <div className="pt-2">
        <span className="uppercase font-bold text-xs"> Components </span>
        <div className="flex flex-col space-y-2 mt-2">
          {sidebarComponents.map((component, index) => (
              <Link key={index} href={component.path} className="px-4 py-1 rounded-md bg-neutral-50">
                <span> {component.name} </span>
              </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
