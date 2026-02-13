import React, { useState } from 'react';
import type { MedicReport } from '../types';
import '../styles/blocks.css';

interface CopyPasteExportProps {
  report: MedicReport;
}

export const CopyPasteExport: React.FC<CopyPasteExportProps> = ({ report }) => {
  const [copied, setCopied] = useState(false);

  const generateTextReport = (): string => {
    const lines: string[] = [];

    lines.push('═══════════════════════════════════════');
    lines.push('⠀⠀⠀⠀⠀MEDIZINISCHE AKTE');
    lines.push('═══════════════════════════════════════');
    lines.push('');

    if (report.patientName) {
      lines.push(`PATIENT: ${report.patientName}`);
      lines.push('');
    }

    if (report.symptoms) {
      lines.push('SYMPTOME & BESCHWERDEN:');
      lines.push(report.symptoms);
      lines.push('');
    }

        if (report.medications && report.medications.length > 0) {
      lines.push('MEDIKATION:');
      report.medications.forEach(med => lines.push(`- ${med}`));
      lines.push('');
    }

    if (report.preSiteVcTreatment) {
      lines.push('VOR ORT BEHANDLUNG:');
      lines.push(report.preSiteVcTreatment);
      lines.push('');
    }

    if (report.hospitalTreatment) {
      lines.push('HOSPITAL BEHANDLUNG:');
      lines.push(report.hospitalTreatment);
      lines.push('');
    }

    if (report.surgeryReport) {
      lines.push('OP BERICHT:');
      lines.push(report.surgeryReport);
      lines.push('');
    }

    if (report.postCareFollowUp) {
      lines.push('NACHKONTROLLE:');
      lines.push(report.postCareFollowUp);
      lines.push('');
    }

    if (report.specialties) {
      lines.push('BESONDERHEITEN:');
      lines.push(report.specialties);
      lines.push('');
    }

    if (report.treatingPersonnel) {
      lines.push('BEHANDELNDES PERSONAL:');
      lines.push(report.treatingPersonnel);
      lines.push('');
    }

    lines.push('═══════════════════════════════════════');
    lines.push(`Erstellt: ${new Date(report.createdAt).toLocaleString('de-DE')}`);
    lines.push('═══════════════════════════════════════');

    return lines.join('\n');
  };

  const reportText = generateTextReport();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(reportText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Copy failed:', err);
    }
  };

  return (
    <div className="copy-paste-export">
      <div className="export-preview">
        <h3>📄 VorschauInGame</h3>
        <pre className="report-preview">{reportText}</pre>
      </div>

      <button
        className={`btn-copy-paste ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
        title="Text in Zwischenablage kopiert"
      >
        {copied ? '✓ Kopiert!' : '📋 Kopieren für InGame'}
      </button>

      <p className="export-hint">
        Klicke auf den Button um die Akte zu kopieren und sie dann InGame einzufügen.
      </p>
    </div>
  );
};