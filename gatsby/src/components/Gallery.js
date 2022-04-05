import * as React from 'react';
import PropTypes from 'prop-types';
import SanityImage from 'gatsby-plugin-sanity-image';
import { Dialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

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
  const [showDialog, setShowDialog] = React.useState(false);
  return (
    <>
      <Dialog
        className="rounded-lg"
        isOpen={showDialog}
        onDismiss={() => setShowDialog(false)}
      >
        <SanityImage class="w-full rounded-t-lg" {...image} alt="" />
        <p className="pt-2 text-gray-500 text-md">{title}</p>
      </Dialog>
      <button
        type="button"
        onClick={() => setShowDialog(!showDialog)}
        className="rounded-lg bg-white"
      >
        <SanityImage
          class="w-full rounded-t-lg"
          {...image}
          width={300}
          alt=""
        />
        <p className="p-4 text-gray-500 text-md">{title}</p>
      </button>
    </>
  );
}

Gallery.propTypes = {
  images: PropTypes.node,
};

GalleryItem.propTypes = {
  title: PropTypes.string,
  image: PropTypes.node,
};
