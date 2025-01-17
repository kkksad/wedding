// components/VenueSection.tsx
import React from "react";
import Image from "next/image";

interface VenueSectionProps {
  venues: string[];
}

const VenueSection: React.FC<VenueSectionProps> = ({ venues }) => {
  return (
    <section>
      <h2>Место</h2>
      <p>
        Наше событие мы решили отметить в атмосферном ресторане Siesta Fiesta на Аптекарской набережной с изысканными итальянскими блюдами и игристым.
      </p>
      <div>
        {venues.map((venue, index) => (
          <Image
            key={index}
            src={venue}
            alt="Venue"
          />
        ))}
      </div>
      <p>
        г.Санкт-Петербург, ул. Академика Павлова, 5В
      </p>
    </section>
  );
};

export default VenueSection;
