// pages/index.tsx
import { useState } from "react";
import { useIsMobile } from "../hooks/use-mobible";
import HeroSection from "../components/HeroSection";
import DateSection from "../components/DateSection";
import VenueSection from "../components/VenueSection"
import ScheduleSection from "../components/ScheduleSection";
import DressCodeSection from "../components/DressCodeSection";
import RulesSection from "../components/RulesSection";
import ClosingSection from "../components/ClosingSection";
import first_photo from "../../public/shared/images/3d505467-291b-4765-8c00-06d6e896727b.png"
import second_photo from "../../public/shared/images/bbe4045e-d8dd-4ac7-b67e-7b5453f592c0.png"
import third_photo from "../../public/shared/images/d813c95e-23c9-4474-83f3-c2f5b7658ad1.png"


const Index = () => {
  const [selectedDate] = useState(27);
  const isMobile = useIsMobile();

  const venues = [
    first_photo,
    second_photo,
    third_photo
  ];

  const rules = [
    {
      rule: "Интеллектуальные конкурсы",
      details: "Каждый гость должен подготовить интеллектуальный конкурс вместе с поздравлением. Это поможет создать атмосферу веселья и ума!"
    },
    {
      rule: "Без сбора денег",
      details: "Пожалуйста, воздержитесь от попыток сбора денег (например, на «мальчика или девочку»). Мы хотим, чтобы наш праздник был о любви и радости, а не о финансовых вопросах."
    },
    {
      rule: "Отказ от выкриков «горько»",
      details: "Мы просим отказаться от высказываний и выкрикиваний «горько». Жених и невеста поздравят друг друга и без этого!"
    },
    {
      rule: "Эстетика конкурсов",
      details: "Просим не проводить конкурсы с пошлостями. Пусть наша свадьба будет красивой, а в памяти останутся только теплые и светлые моменты."
    }
  ];

  const schedule = [
    { time: "15:00", event: "Сбор гостей", description: "ЗАГС, г.Санкт-Петербург, Большая Монетная ул., 17-19" },
    { time: "15:20", event: "Свадебная церемония", description: "Торжественная церемония бракосочетания" },
    { time: "15:40", event: "Фотосессия и поздравления", description: "Поздравления с игристым и пиццей" },
    { time: "17:00", event: "Водная прогулка", description: "Прогулка по рекам и каналам (причал на Аптекарской набережной Петроградского района)" },
    { time: "19:00", event: "Праздничный ужин", description: "Ужин в ресторане \"Siesta Fiesta\" в кругу самых близких" },
    { time: "23:00", event: "Окончание мероприятия", description: "Завершение праздничного вечера" }
  ];

  const colors = [
    { name: "Navy", hex: "#1C2331" },
    { name: "Deep Brown", hex: "#3C2F2F" },
    { name: "Terracotta", hex: "#9E5D5D" },
    { name: "Sand", hex: "#D4C5B9" },
    { name: "Light Sand", hex: "#E6D5C7" },
    { name: "Ivory", hex: "#F8F1ED" }
  ];

  return (
    <div>
      <HeroSection />
      <DateSection selectedDate={selectedDate} />
      {/* <VenueSection venues={venues} /> */}
      <ScheduleSection schedule={schedule} />
      <DressCodeSection colors={colors} /> 
      <RulesSection rules={rules} />
      <ClosingSection />
    </div>
  );
};

export default Index;
