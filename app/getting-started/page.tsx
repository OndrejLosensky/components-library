import ContentHeader from "@/components/contentHeader";

export default function GettingStarted() {
  return (
    <div className="prose prose-gray max-w-none">
      <ContentHeader>Getting Started</ContentHeader>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Installation</h2>
        <p className="text-gray-600 mb-6">
          Get started by creating a new Next.js project with our UI components:
        </p>
        
        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm mb-6">
          <code>npx create-next-app@latest my-ui-app --typescript --tailwind</code>
        </div>

        <p className="text-gray-600 mb-4">
          Once installed, you can start the development server:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
          <code>npm run dev</code>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Project Structure</h2>
        <p className="text-gray-600 mb-6">
          The project is organized into the following structure:
        </p>

        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 font-mono text-sm">
          <pre className="text-gray-700">
{`├── components/
│   ├── UI/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   └── ...
├── app/
│   ├── button/
│   ├── input/
│   └── ...
└── ...`}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <p className="text-gray-600 mb-6">
          Import and use components in your pages:
        </p>

        <div className="bg-gray-900 text-gray-100 rounded-lg p-4 font-mono text-sm">
          <pre>
{`import { Button } from '@/components/UI/Button';

export default function MyPage() {
  return (
    <Button variant="primary" size="md">
      Click me
    </Button>
  );
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="space-y-3 text-gray-600">
          <li>✓ Built with TypeScript</li>
          <li>✓ Tailwind CSS for styling</li>
          <li>✓ Fully responsive components</li>
          <li>✓ Accessible by default</li>
          <li>✓ Dark mode support</li>
        </ul>
      </section>
    </div>
  );
}
