import ContentHeader from "@/components/contentHeader";
import { Select, Option } from "@/components/UI/select";

export default function SelectPage () {
    return (
        <div className="p-4 w-full">
            <ContentHeader> Select </ContentHeader>
            <div className="flex w-48 mt-4 flex-col gap-y-2">
            <Select variant="primary" selectSize="md">
                <Option value="option1" customStyle="text-blue-600">Option 1</Option>
                <Option value="option2" customStyle="text-red-600">Option 2</Option>
                <Option value="option3" customStyle="text-green-600">Option 3</Option>
            </Select>

            {/* Outline variant with large size */}
            <Select variant="outline" selectSize="lg" className="mt-4">
                <Option value="optionA" customStyle="font-semibold">Option A</Option>
                <Option value="optionB" customStyle="italic">Option B</Option>
                <Option value="optionC" customStyle="underline">Option C</Option>
            </Select>
            </div>
        </div>
    )
}