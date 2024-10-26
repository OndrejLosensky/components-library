import ContentHeader from "@/components/contentHeader";
import Button from "@/components/UI/button";

export default function ButtonPage () {
    return (
        <div className="p-4 w-full">
            <ContentHeader> Button </ContentHeader>
            <div className="flex w-48 mt-4 flex-col gap-y-2">
                <Button variant="primary" size="sm" > Primary Sm </Button>
                <Button variant="secondary" size="md" > Secondary Md </Button>
                <Button variant="outline" size="lg" > Outlined LG </Button>                            
            </div>
        </div>
    )
}