import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export function Highlights({ bottomHighlightsText, topHighlightsText }) {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto max-w-screen-xl">
        <div className="flex pt-32 pb-14 sm:pb-16 px-8 flex-wrap">
          <div className="w-full order-1 pt-8 sm:w-1/2 sm:order-0 sm:pt-0 px-6">
            <StaticImage
              className="object-cover bg-gray-100 rounded-lg"
              src="../images/Reception.jpeg"
            />
          </div>
          <div className="w-full px-8 sm:w-1/2 order-0 sm:order-1 sm:px-6">
            <h2 className="text-3xl font-extrabold pb-3">
              {topHighlightsText.title}
            </h2>
            <hr className="w-16 border-gray-300" />
            <p className="mt-3 text-gray-500 text-lg">
              {topHighlightsText.text}
            </p>
          </div>
        </div>

        <div className="flex sm:pt-16 pb-32 px-8 flex-wrap">
          <div className="w-full sm:w-1/2 px-8 sm:px-6">
            <h2 className="font-extrabold pb-3 text-3xl">
              {bottomHighlightsText.title}
            </h2>
            <hr className="w-16 border-gray-300" />
            <p className="mt-3 text-gray-500 text-lg">
              {bottomHighlightsText.text}
            </p>
          </div>
          <div className="w-full sm:w-1/2 px-6 pt-8 sm:pt-0">
            <StaticImage
              className="object-cover bg-gray-100 rounded-lg"
              src="../images/Kitchen.jpeg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
