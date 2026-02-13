import React from 'react';
import type { MedicReport } from '../types';
import { injuryTemplates, injuryCategories, severityLevels } from '../data/injuryTemplates';
import '../styles/blocks.css';

interface TemplateSelectorProps {
  onTemplateSelect: (report: MedicReport) => void;
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onTemplateSelect }) => {
  const handleSelectTemplate = (templateId: string) => {
    const template = injuryTemplates.find((t) => t.id === templateId);
    if (!template) return;

    const generateId = () => crypto.getRandomValues(new Uint8Array(16))
      .reduce((acc, byte) => acc + byte.toString(16).padStart(2, '0'), '');

    const newReport: MedicReport = {
      id: generateId(),
      patientName: '',
      symptoms: template.symptoms,
      medications: template.medications || [],
      preSiteVcTreatment: template.preSiteVcTreatment,
      hospitalTreatment: template.hospitalTreatment,
      surgeryReport: template.surgeryReport || '',
      postCareFollowUp: template.postCareFollowUp,
      specialties: template.specialties || '',
      treatingPersonnel: '',
      createdAt: new Date(),
      blocks: [],
    };

    onTemplateSelect(newReport);
  };

  // Group templates by category
  const groupedTemplates = injuryTemplates.reduce(
    (acc, template) => {
      if (!acc[template.category]) {
        acc[template.category] = [];
      }
      acc[template.category].push(template);
      return acc;
    },
    {} as Record<string, typeof injuryTemplates>
  );

  return (
    <div className="template-selector">
      <h2>🎯 Verletzungsvorlagen</h2>
      <p className="template-info">Wähle eine Vorlage um automatisch alle Felder auszufüllen</p>

      {Object.entries(groupedTemplates).map(([category, templates]) => {
        const categoryInfo = injuryCategories[category as keyof typeof injuryCategories];
        return (
          <div key={category} className="template-category">
            <h3 style={{ color: categoryInfo.color }}>
              {categoryInfo.icon} {category}
            </h3>
            <div className="template-grid">
              {templates.map((template) => {
                const severity = severityLevels[template.severity];
                return (
                  <button
                    key={template.id}
                    className="template-card"
                    onClick={() => handleSelectTemplate(template.id)}
                    style={{ borderLeftColor: severity.color }}
                  >
                    <div className="template-name">{template.name}</div>
                    <div className="template-description">{template.description}</div>
                    <div
                      className="template-severity"
                      style={{ backgroundColor: severity.color }}
                    >
                      {template.severity}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
