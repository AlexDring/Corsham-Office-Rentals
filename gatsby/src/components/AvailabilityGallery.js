import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function AvailabilityGallery() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto pt-6 px-4  pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AvailabilityGalleryCard />
          <AvailabilityGalleryCard />
          <AvailabilityGalleryCard />
          <AvailabilityGalleryCard />
        </div>
      </div>
    </section>
  );
}

function AvailabilityGalleryCard() {
  return (
    <div className="rounded-lg bg-white">
      <StaticImage
        class="w-full rounded-t-lg"
        src="../images/Exterior-2-395x263.jpeg"
      />
      <p className="p-4 text-gray-500 text-md">Office Exterior</p>
    </div>
  );
}
