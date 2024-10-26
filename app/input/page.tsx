import ContentHeader from "@/components/contentHeader";
import Input from "@/components/UI/input";

export default function InputPage () {
    return (
        <div className="p-4 w-full">
            <ContentHeader> Input </ContentHeader>
            <div className="flex w-48 mt-4 flex-col gap-y-2">
                <Input className="bg-red-50"/>
            </div>
        </div>
    )
}