import ContentHeader from "@/components/contentHeader";
import Input from "@/components/UI/input";
import { IoMail, IoLockClosed, IoSearch } from "react-icons/io5";

export default function InputPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <ContentHeader>Input</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Input components allow users to enter text and data.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4 max-w-sm">
            <Input placeholder="Default input" />
            <Input placeholder="Disabled input" disabled />
            <Input placeholder="Error input" error errorMessage="This field is required" />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-4">
          Inputs come in different sizes.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4 max-w-sm">
            <Input inputSize="sm" placeholder="Small input" />
            <Input inputSize="md" placeholder="Medium input" />
            <Input inputSize="lg" placeholder="Large input" />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <p className="text-gray-600 mb-4">
          Inputs can include icons for better visual hierarchy.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4 max-w-sm">
            <Input leftIcon={<IoMail />} placeholder="Enter your email" />
            <Input 
              leftIcon={<IoLockClosed />} 
              type="password" 
              placeholder="Enter password" 
            />
            <Input 
              leftIcon={<IoSearch />} 
              rightIcon={<IoSearch />} 
              placeholder="Search..." 
            />
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="text-gray-600 mb-4">
          Different styles to suit your needs.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4 max-w-sm">
            <Input variant="primary" placeholder="Primary variant" />
            <Input variant="secondary" placeholder="Secondary variant" />
            <Input variant="outline" placeholder="Outline variant" />
          </div>
        </div>
      </section>
    </div>
  );
}