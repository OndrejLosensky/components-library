import ContentHeader from "@/components/contentHeader";
import Button from "@/components/UI/Button";
import Link from "next/link";
import { IoMail, IoSearch, IoAdd, IoTrash } from "react-icons/io5";

export default function ButtonPage() {
  return (
    <div className="prose prose-gray max-w-none">
       <Link
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mt-4"
      >
        <span>Back to homepage</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4 ml-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 12H5m7-7l-7 7 7 7"
          />
        </svg>
      </Link>
      <ContentHeader>Button</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Buttons allow users to trigger actions with a single click or tap.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-wrap gap-4">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="success">Success</Button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-4">
          Buttons come in different sizes to suit your needs.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex items-center gap-4">
            <Button variant="primary" size="xs">Extra Small</Button>
            <Button variant="primary" size="sm">Small</Button>
            <Button variant="primary" size="md">Medium</Button>
            <Button variant="primary" size="lg">Large</Button>
            <Button variant="primary" size="xl">Extra Large</Button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <p className="text-gray-600 mb-4">
          Buttons can include icons to enhance visual communication.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-wrap gap-4">
            <Button leftIcon={<IoMail />}>
              Send Email
            </Button>
            <Button rightIcon={<IoAdd />} variant="success">
              Add New
            </Button>
            <Button leftIcon={<IoSearch />} variant="outline">
              Search
            </Button>
            <Button leftIcon={<IoTrash />} rightIcon={<IoTrash />} variant="danger">
              Delete
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">States</h2>
        <p className="text-gray-600 mb-4">
          Buttons can be displayed in various states.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-wrap gap-4">
            <Button isLoading loadingText="Loading...">
              Submit
            </Button>
            <Button isDisabled>
              Disabled
            </Button>
            <Button isFullWidth className="max-w-xs">
              Full Width
            </Button>
            <Button isRounded leftIcon={<IoAdd />}>
              Rounded
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Custom Styling</h2>
        <p className="text-gray-600 mb-4">
          Buttons can be customized with additional classes.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-wrap gap-4">
            <Button className="shadow-lg hover:shadow-xl">
              With Shadow
            </Button>
            <Button className="animate-pulse" variant="success">
              Animated
            </Button>
            <Button className="border-4" variant="outline">
              Thick Border
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}