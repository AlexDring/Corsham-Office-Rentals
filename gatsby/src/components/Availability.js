import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PropTypes } from 'prop-types';

export default function Availability({ title, availability }) {
  return (
    <section id="availability" className="bg-gray-100">
      <div className="container mx-auto pt-16 max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-center pb-1">{title}</h2>
          <p className="text-gray-500 text-lg px-4">
            For enquiries please contact francesround@hotmail.co.uk or call
            01225 891825
          </p>
        </div>
        <div className="flex pt-8 pb-16 justify-center flex-wrap mx-8s py-6">
          {availability.map((room) => (
            <AvailabilityCard key={room._key} {...room} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AvailabilityCard({ roomType, title, text }) {
  return (
    <div className="bg-white rounded-lg shadow-md w-4/5 sm:w-2/5 lg:w-3/10 mb-7 mx-4">
      <div>
        <StaticImage className="rounded-t-lg" src="../images/Kitchen.jpeg" />
      </div>
      <div className="px-6 pt-6 pb-10">
        <p className="text-xs text-red-600 font-semibold uppercase">
          {roomType}
        </p>
        <h3 className="text-lg font-bold my-1.5">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}

Availability.propTypes = {
  title: PropTypes.string,
  availability: PropTypes.array,
};

AvailabilityCard.propTypes = {
  roomType: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
