"use client"; // Mark this as a client component

import ContentHeader from "@/components/contentHeader"; // Adjust the import path
import { Accordion, AccordionItem } from "@/components/UI/accordion"; // Adjust the import path

export default function AccordionPage() {
  return (
    <div className="p-4 w-full">
      <ContentHeader>Accordion</ContentHeader>
      <div className="flex w-full mt-4 flex-col gap-y-2">
        <Accordion>
          <AccordionItem title="Item 1">
            <p>This is the content for item 1. You can add more information here.</p>
          </AccordionItem>
          <AccordionItem title="Item 2">
            <p>This is the content for item 2. It can also hold more details.</p>
          </AccordionItem>
          <AccordionItem title="Item 3">
            <p>This is the content for item 3. You can customize it further!</p>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
