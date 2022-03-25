import * as React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export default function Gallery({ images }) {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto pt-6 px-4  pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <GalleryItem {...image} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryItem({ title, image }) {
  console.log(image);
  return (
    <div className="rounded-lg bg-white">
      <GatsbyImage
        class="w-full rounded-t-lg"
        image={image.asset.gatsbyImageData}
      />
      <p className="p-4 text-gray-500 text-md">{title}</p>
    </div>
  );
}
