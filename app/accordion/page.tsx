"use client";

import React from "react";
import ContentHeader from "@/components/contentHeader";
import { Accordion, AccordionItem } from "@/components/UI/accordion";
import { IoNotifications, IoKey, IoFlask } from "react-icons/io5";
import Link from "next/link";

export default function AccordionPage() {
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

      <ContentHeader>Accordion</ContentHeader>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Basic Usage</h2>
        <p className="text-gray-600 mb-4">
          Accordions are used to organize and show/hide content in a collapsible
          manner.
        </p>

        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <Accordion>
            <AccordionItem title="What is an accordion?">
              <p>
                An accordion is a vertically stacked set of interactive headings
                that each reveal a section of content.
              </p>
            </AccordionItem>
            <AccordionItem title="How does it work?">
              <p>
                Click the header to expand/collapse the content. Only one
                section can be open at a time by default.
              </p>
            </AccordionItem>
            <AccordionItem title="Can I customize it?">
              <p>
                Yes! The accordion supports different variants, sizes, and can
                be styled using custom classes.
              </p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Variants</h2>
        <p className="text-gray-600 mb-4">
          Accordions come in different variants to match your design needs.
        </p>

        <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">Default</h3>
            <Accordion variant="default">
              <AccordionItem title="Default Variant">
                <p>This is the default accordion style.</p>
              </AccordionItem>
              <AccordionItem title="Another Section">
                <p>More content here.</p>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Bordered</h3>
            <Accordion variant="bordered">
              <AccordionItem title="Bordered Variant">
                <p>This accordion has a more prominent border.</p>
              </AccordionItem>
              <AccordionItem title="Another Section">
                <p>More content here.</p>
              </AccordionItem>
            </Accordion>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Separated</h3>
            <Accordion variant="separated">
              <AccordionItem title="Separated Items">
                <p>Items in this variant have space between them.</p>
              </AccordionItem>
              <AccordionItem title="Another Section">
                <p>More content here.</p>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">With Icons</h2>
        <p className="text-gray-600 mb-4">
          Accordion items can include icons in their headers.
        </p>

        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <Accordion>
            <AccordionItem
              title="Notifications"
              icon={<IoNotifications className="w-5 h-5" />}
            >
              <p>Manage your notification preferences here.</p>
            </AccordionItem>
            <AccordionItem
              title="Security"
              icon={<IoKey className="w-5 h-5" />}
            >
              <p>Update your security settings.</p>
            </AccordionItem>
            <AccordionItem title="Labs" icon={<IoFlask className="w-5 h-5" />}>
              <p>Experimental features configuration.</p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Multiple Open Items</h2>
        <p className="text-gray-600 mb-4">
          Accordions can be configured to allow multiple items to be open
          simultaneously.
        </p>

        <div className="p-6 bg-white rounded-lg border border-gray-200">
          <Accordion multiple>
            <AccordionItem title="First Item">
              <p>This can be open at the same time as other items.</p>
            </AccordionItem>
            <AccordionItem title="Second Item">
              <p>This too can be open simultaneously.</p>
            </AccordionItem>
            <AccordionItem title="Third Item">
              <p>All items can be open at once!</p>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
}
