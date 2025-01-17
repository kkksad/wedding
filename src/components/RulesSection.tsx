// components/RulesSection.tsx
import React from "react";

interface Rule {
  rule: string;
  details: string;
}

interface RulesSectionProps {
  rules: Rule[];
}

const RulesSection: React.FC<RulesSectionProps> = ({ rules }) => {
  return (
    <section>
      <h2>Правила</h2>
      <div>
        {rules.map((item, index) => (
          <div key={index}>
            <div>{index + 1}.</div>
            <div>
              <h2>{item.rule}</h2>
              <p>{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RulesSection;
