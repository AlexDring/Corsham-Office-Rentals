import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Hero from '../components/Hero';
import Availability from '../components/Availability';

export default function HomePage() {
  return (
    <main>
      <Hero />
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
                Leafield Health & Business Centre
              </h2>
              <hr className="w-16 border-gray-300" />
              <p className="mt-3 text-gray-500 text-lg">
                We offer a range of individual offices from 1 to 20 people as
                well as meeting and conference room facilities. There is a
                separate quiet corridor for treatment and therapy rooms. This
                building is perfect for both startup businesses and existing
                established organisations in need of a new start or just a
                bright and confident space to expand into.
              </p>
            </div>
          </div>

          <div className="flex sm:pt-16 pb-32 px-8 flex-wrap">
            <div className="w-full sm:w-1/2 px-8 sm:px-6">
              <h2 className="font-extrabold pb-3 text-3xl">
                Everything you need!
              </h2>
              <hr className="w-16 border-gray-300" />
              <p className="mt-3 text-gray-500 text-lg">
                People and visitors can benefit from a shared kitchen which
                includes complimentary beverages and filtered chilled water.
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
      <Availability />
    </main>
  );
}
