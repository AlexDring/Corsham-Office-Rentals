import * as React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { PropTypes } from 'prop-types';

export default function Availability() {
  return (
    <section id="availability" className="bg-gray-100">
      <div className="container mx-auto pt-16 max-w-screen-xl">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-center pb-1">
            Current Availability
          </h2>
          <p className="text-gray-500 text-lg px-4">
            For enquiries please contact francesround@hotmail.co.uk or call
            01225 891825
          </p>
        </div>
        <div className="flex pt-8 pb-16 justify-center flex-wrap mx-8s py-6">
          <AvailabilityCard
            type="Treatment Rooms"
            title="A selection of treatment rooms available"
            text="There is a range of treatment and theapy rooms. These rooms are available on a daily/half daily or an hourly or full-time basis. If this may be of interest then please make an appointment to come have a look around. "
          />
          <AvailabilityCard
            type="Offices"
            title="Currently there are a selection of offices available."
            text="A range of individual offices from 1 to 20 people over two floors, as well as meeting and conference space, this building is perfect for both startup businesses and existing established organisations in need of a new start or just a bright and confident space to expand into. "
          />
          <AvailabilityCard
            type="Studios"
            title="Studio space available for hourly or daily use"
            text="A good sized studio is available that can be used for classes such as pilates/yoga, zumba or any class group or meeting and includes a large TV for presentations. The room includes a self-contained kitchenette and includes tea/coffee and filetered water. Good wifi is available throughout the building. Viewing is possible by appointment or if you just want to browse feel free to come and have a look."
          />
        </div>
      </div>
    </section>
  );
}

function AvailabilityCard({ type, title, text }) {
  return (
    <div className="bg-white rounded-lg shadow-md w-4/5 sm:w-2/5 lg:w-3/10 mb-7 mx-4">
      <div>
        <StaticImage className="rounded-t-lg" src="../images/Kitchen.jpeg" />
      </div>
      <div className="px-6 pt-6 pb-10">
        <p className="text-xs text-red-600 font-semibold uppercase">{type}</p>
        <h3 className="text-lg font-bold my-1.5">{title}</h3>
        <p className="text-sm text-gray-600">{text}</p>
      </div>
    </div>
  );
}

AvailabilityCard.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};
