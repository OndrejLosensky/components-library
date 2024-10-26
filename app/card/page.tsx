import ContentHeader from "@/components/contentHeader";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/UI/card";

export default function CardPage() {
  return (
    <div className="p-4 w-full">
      <ContentHeader> Input </ContentHeader>
      <div className="flex w-48 mt-4 flex-col gap-y-2">
        <Card>
          <CardHeader className="text-lg font-semibold">Card Title</CardHeader>
          <CardBody>
            <p>
              This is some content inside the card body. You can add anything
              here.
            </p>
          </CardBody>
          <CardFooter className="text-right">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Action
            </button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-50">
          <CardHeader className="text-lg font-semibold">
            Another Card
          </CardHeader>
          <CardBody>
            <p>This card has a different background color!</p>
          </CardBody>
          <CardFooter className="text-right">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Another Action
            </button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
