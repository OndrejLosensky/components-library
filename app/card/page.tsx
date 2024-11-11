import ContentHeader from "@/components/contentHeader";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/UI/card";
import Button from "@/components/UI/Button";

export default function CardPage() {
  return (
    <div className="prose prose-gray max-w-none">
      <ContentHeader>Card</ContentHeader>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Cards are used to group and display content in a way that is easily readable.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="max-w-sm">
            <Card>
              <CardHeader>Card Title</CardHeader>
              <CardBody>
                <p>This is some content inside the card body. You can add anything here.</p>
              </CardBody>
              <CardFooter>
                <Button variant="primary" size="sm">Action</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="text-gray-600 mb-4">
          Cards come in different variants to match your design needs.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="grid grid-cols-3 gap-4">
            <Card variant="default">
              <CardBody>Default Card</CardBody>
            </Card>
            <Card variant="outlined">
              <CardBody>Outlined Card</CardBody>
            </Card>
            <Card variant="elevated">
              <CardBody>Elevated Card</CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sizes</h2>
        <p className="text-gray-600 mb-4">
          Cards can be rendered in different sizes.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="space-y-4">
            <Card size="sm">
              <CardBody size="sm">Small Card</CardBody>
            </Card>
            <Card size="md">
              <CardBody size="md">Medium Card</CardBody>
            </Card>
            <Card size="lg">
              <CardBody size="lg">Large Card</CardBody>
            </Card>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Custom Styling</h2>
        <p className="text-gray-600 mb-4">
          Cards can be customized with different styles and colors.
        </p>
        
        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <div className="grid grid-cols-2 gap-4">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader className="text-blue-700">Custom Blue Card</CardHeader>
              <CardBody>Content with custom styling</CardBody>
            </Card>
            <Card className="bg-green-50 border-green-200">
              <CardHeader className="text-green-700">Custom Green Card</CardHeader>
              <CardBody>Content with custom styling</CardBody>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
