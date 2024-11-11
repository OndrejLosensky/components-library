import ContentHeader from "@/components/contentHeader";
import { Select, Option } from "@/components/UI/select";

export default function SelectPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <ContentHeader>Select</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Select components allow users to choose one option from a dropdown list.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="max-w-xs">
            <Select variant="primary" selectSize="md">
              <Option value="option1">Option 1</Option>
              <Option value="option2">Option 2</Option>
              <Option value="option3">Option 3</Option>
            </Select>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="text-gray-600 mb-4">
          Select comes in different variants to match your design needs.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4 max-w-xs">
            <Select variant="primary" selectSize="md">
              <Option value="option1">Primary Variant</Option>
              <Option value="option2">Another Option</Option>
            </Select>

            <Select variant="outline" selectSize="md">
              <Option value="option1">Outline Variant</Option>
              <Option value="option2">Another Option</Option>
            </Select>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-4">
          Different sizes are available to fit various layouts.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="flex flex-col gap-4 max-w-xs">
            <Select variant="primary" selectSize="sm">
              <Option value="small">Small Size</Option>
              <Option value="option2">Option 2</Option>
            </Select>

            <Select variant="primary" selectSize="md">
              <Option value="medium">Medium Size</Option>
              <Option value="option2">Option 2</Option>
            </Select>

            <Select variant="primary" selectSize="lg">
              <Option value="large">Large Size</Option>
              <Option value="option2">Option 2</Option>
            </Select>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Custom Styling</h2>
        <p className="text-gray-600 mb-4">
          Options can be customized with different styles.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="max-w-xs">
            <Select variant="outline" selectSize="md">
              <Option value="option1" customStyle="text-blue-600 font-semibold">
                Custom Blue Text
              </Option>
              <Option value="option2" customStyle="text-red-600 italic">
                Custom Red Italic
              </Option>
              <Option value="option3" customStyle="text-green-600 underline">
                Custom Green Underline
              </Option>
            </Select>
          </div>
        </div>
      </section>
    </div>
  );
}