import React, { useState, useMemo, useEffect } from 'react';
import type { MedicReport } from '../types';
import type { BlockConfig } from './Block';
import { Block } from './Block';
import { BlockSelector } from './BlockSelector';
import { MedicationBlock } from './MedicationBlock';
import '../styles/blocks.css';

interface SimpleReportProps {
  report: MedicReport;
  onChange: (report: MedicReport) => void;
}

const defaultBlocks: BlockConfig[] = [
  { key: 'patientName', label: 'Patientenname', icon: '👤', type: 'text', visible: true },
  { key: 'symptoms', label: 'Symptome und Beschwerden', icon: '🔍', type: 'textarea', rows: 4, visible: true },
  { key: 'medications', label: 'Medikation', icon: '💊', type: 'medications', visible: true },
  { key: 'preSiteVcTreatment', label: 'Vor Ort Behandlung', icon: '🚑', type: 'textarea', rows: 4, visible: true },
  { key: 'hospitalTreatment', label: 'Hospital Behandlung', icon: '🏥', type: 'textarea', rows: 4, visible: true },
  { key: 'surgeryReport', label: 'OP Bericht', icon: '🔪', type: 'textarea', rows: 4, visible: false },
  { key: 'postCareFollowUp', label: 'Nachkontrolle', icon: '📋', type: 'textarea', rows: 4, visible: false },
  { key: 'specialties', label: 'Besonderheiten', icon: '⚠️', type: 'textarea', rows: 4, visible: true },
  { key: 'treatingPersonnel', label: 'Behandelndes Personal', icon: '👨‍⚕️', type: 'text', visible: true },
];

export const ReportEditor: React.FC<SimpleReportProps> = ({ report, onChange }) => {
  // Initialize blocks from localStorage for this report
  const initializeBlocks = () => {
    const storageKey = `reportBlocks_${report.id}`;
    const stored = localStorage.getItem(storageKey);
    return stored ? JSON.parse(stored) : defaultBlocks;
  };

  const [blocks, setBlocks] = useState<BlockConfig[]>(initializeBlocks());
  const [showBlockSelector, setShowBlockSelector] = useState(false);

  // Load blocks when report changes
  // Note: React warns about setState in effects, but this is the correct pattern for 
  // loading report-specific configuration when the report ID changes
  useEffect(() => {
    const storageKey = `reportBlocks_${report.id}`;
    const stored = localStorage.getItem(storageKey);
    const newBlocks = stored ? JSON.parse(stored) : defaultBlocks;
    setBlocks(newBlocks);
    setShowBlockSelector(false);
  }, [report.id]);

  const handleFieldChange = (field: string, value: string) => {
    onChange({
      ...report,
      [field]: value,
    });
  };

  const handleToggleBlock = (key: string) => {
    const updated = blocks.map((b) =>
      b.key === key ? { ...b, visible: !b.visible } : b
    );
    setBlocks(updated);
    localStorage.setItem(`reportBlocks_${report.id}`, JSON.stringify(updated));
  };

  const handleResetBlocks = () => {
    setBlocks(defaultBlocks);
    localStorage.setItem(`reportBlocks_${report.id}`, JSON.stringify(defaultBlocks));
  };

  const visibleBlocks = useMemo(() => blocks.filter((b) => b.visible), [blocks]);

  return (
    <div className="report-editor">
      <div className="report-editor-header">
        <h2>✏️ Verletzungsbericht bearbeiten</h2>
        <button
          className={`btn-block-settings ${showBlockSelector ? 'active' : ''}`}
          onClick={() => setShowBlockSelector(!showBlockSelector)}
          title="Bausteine anpassen"
        >
          ⚙️ Bausteine ({visibleBlocks.length})
        </button>
      </div>

      {showBlockSelector && (
        <BlockSelector
          blocks={blocks}
          onToggleBlock={handleToggleBlock}
          onResetBlocks={handleResetBlocks}
        />
      )}

      <div className="report-editor-blocks">
        {visibleBlocks.map((block) => {
          if (block.key === 'medications') {
            return (
              <MedicationBlock
                key={block.key}
                medications={report.medications || []}
                onMedicationsChange={(meds) => onChange({ ...report, medications: meds })}
                onToggleVisibility={() => handleToggleBlock(block.key)}
                visible={block.visible}
              />
            );
          }
          return (
            <Block
              key={block.key}
              config={block}
              value={(report[block.key as keyof MedicReport] as string) || ''}
              onChange={(value) => handleFieldChange(block.key, value)}
              onToggleVisibility={() => handleToggleBlock(block.key)}
            />
          );
        })}
      </div>
    </div>
  );
};