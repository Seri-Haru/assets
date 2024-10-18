// components/Gallery.jsx
import React from 'react';
import Image from './Image';

function Gallery() {
  return (
    <aside>
      <h2>Favourite photos</h2>
      <div>
        <Image src="favorite-1_th.jpg" alt="Small black bird, black claws, long black slender beak" />
        <Image src="favorite-2_th.jpg" alt="Top half of a pretty bird with bright blue plumage on neck, light colored beak, blue headdress" />
        <Image src="favorite-3_th.jpg" alt="Top half of a large bird with white plumage, very long curved narrow light colored beak" />
        <Image src="favorite-4_th.jpg" alt="Large bird, mostly white plumage with black plumage on back and rear, long straight white beak" />
      </div>
    </aside>
  );
}

export default Gallery;
