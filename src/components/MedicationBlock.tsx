import React, { useState } from 'react';
import '../styles/blocks.css';

interface MedicationBlockProps {
  medications: string[];
  onMedicationsChange: (medications: string[]) => void;
  onToggleVisibility: () => void;
  visible: boolean;
}

export const MedicationBlock: React.FC<MedicationBlockProps> = ({
  medications,
  onMedicationsChange,
  onToggleVisibility,
  visible,
}) => {
  const [newMedication, setNewMedication] = useState('');

  if (!visible) return null;

  const handleAddMedication = () => {
    if (newMedication.trim()) {
      onMedicationsChange([...medications, newMedication.trim()]);
      setNewMedication('');
    }
  };

  const handleRemoveMedication = (index: number) => {
    onMedicationsChange(medications.filter((_, i) => i !== index));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddMedication();
    }
  };

  return (
    <div className="block">
      <div className="block-header">
        <label className="block-label">
          <span className="block-icon">💊</span>
          <span className="block-title">Medikation</span>
        </label>
        <div className="block-actions">
          <button
            className="btn-block-toggle"
            onClick={onToggleVisibility}
            title="Block ausblenden"
            aria-label="Ausblenden"
          >
            ▼
          </button>
        </div>
      </div>

      <div className="block-content">
        <div className="medication-input-section">
          <div className="medication-input-group">
            <input
              type="text"
              value={newMedication}
              onChange={(e) => setNewMedication(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Medikament eingeben (z.B. Ibuprofen 400mg)"
              className="medication-input"
            />
            <button
              onClick={handleAddMedication}
              className="btn-add-medication"
              title="Medikament hinzufügen"
            >
              + Hinzufügen
            </button>
          </div>
        </div>

        {medications.length > 0 ? (
          <div className="medication-list">
            {medications.map((medication, index) => (
              <div key={index} className="medication-item">
                <span className="medication-name">{medication}</span>
                <button
                  onClick={() => handleRemoveMedication(index)}
                  className="btn-remove-medication"
                  title="Medikament entfernen"
                  aria-label="Entfernen"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className="medication-empty">Keine Medikamente hinzugefügt</p>
        )}
      </div>
    </div>
  );
};
