import * as React from 'react';
import AvailabilityGallery from '../components/AvailabilityGallery';

export default function Offices() {
  return (
    <>
      <section className="bg-gray-100">
        <div className="container mx-auto py-12">
          <div className="mt-4 max-w-2xl md:mx-auto text-center">
            <h1 className="text-4xl font-extrabold">Office Availability</h1>
            <p className="text-gray-700 text-lg pt-2">
              For enquiries please contact{' '}
              <a
                className="text-red-700 font-semibold"
                href="mailto:francesround@hotmail.co.uk"
              >
                francesround@hotmail.co.uk
              </a>{' '}
              or call{' '}
              <a className="text-red-700 font-semibold" href="tel:01225 891825">
                01225 891825
              </a>
            </p>
          </div>

          <p className="max-w-screen-md mx-4 sm:mx-auto bg-white p-8 mt-8 leading-7 text-slate-700 rounded-lg">
            We offer a range of individual offices from 1 to 20 people as well
            as meeting and conference space. This building is perfect for both
            startup businesses and existing established organisations in need of
            a new start or just a bright and confident space to expand into.
            There is excellent wifi also included.
          </p>
        </div>
      </section>
      <AvailabilityGallery />
    </>
  );
}
