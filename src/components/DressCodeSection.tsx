// components/DressCodeSection.tsx
import React from "react";

interface Color {
  name: string;
  hex: string;
}

interface DressCodeSectionProps {
  colors: Color[];
}

const DressCodeSection: React.FC<DressCodeSectionProps> = ({ colors }) => {
  return (
    <section>
      <h2>Дресс-код</h2>
      <p>
        Нам будет очень приятно, если вы учтете наши пожелания и при выборе одежды предпочтете вечерние наряды в представленной ниже гамме:
      </p>
      <div>
        {colors.map((color) => (
          <div key={color.name}>
            <div style={{ backgroundColor: color.hex }} />
            <p>{color.name}</p>
          </div>
        ))}
      </div>
      <p>*от белого-бежевого до коричневого-черного</p>
    </section>
  );
};

export default DressCodeSection;
