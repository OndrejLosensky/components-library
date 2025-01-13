import Link from "next/link";

const sidebarSections = [
  {
    title: "Overview",
    items: [
      { name: "Getting Started", path: "/getting-started" },
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

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6">      
      <h1 className="py-4 text-3xl font-semibold"> Components Library v1.0 </h1>
      <div className="space-y-12">
        {sidebarSections.map((section, index) => (
          <div key={index} className="space-y-4">
            <h2 className="text-3xl font-semibold">{section.title}</h2>
            
            {section.items.map((item, itemIndex) => (              
                <Link
                  key={itemIndex}
                  href={item.path}
                  className="p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  <span className="text-gray-400">→</span>
                </Link>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
