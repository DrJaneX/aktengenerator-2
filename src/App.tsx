import { useState } from 'react';
import type { MedicReport } from './types';
import { ReportEditor } from './components/ReportEditor';
import { CopyPasteExport } from './components/CopyPasteExport';
import { TemplateSelector } from './components/TemplateSelector';
import './styles/app.css';

const generateId = () => crypto.getRandomValues(new Uint8Array(16))
  .reduce((acc, byte) => acc + byte.toString(16).padStart(2, '0'), '');

function App() {
  const [report, setReport] = useState<MedicReport>({
    id: generateId(),
    patientName: '',
    symptoms: '',
    medications: [],
    preSiteVcTreatment: '',
    hospitalTreatment: '',
    surgeryReport: '',
    postCareFollowUp: '',
    specialties: '',
    treatingPersonnel: '',
    createdAt: new Date(),
    blocks: [],
  });

  const [showTemplates, setShowTemplates] = useState(true);

  const handleTemplateSelect = (selectedReport: MedicReport) => {
    setReport(selectedReport);
    setShowTemplates(false);
  };

  const handleNewReport = () => {
    setReport({
      id: generateId(),
      patientName: '',
      symptoms: '',
      medications: [],
      preSiteVcTreatment: '',
      hospitalTreatment: '',
      surgeryReport: '',
      postCareFollowUp: '',
      specialties: '',
      treatingPersonnel: '',
      createdAt: new Date(),
      blocks: [],
    });
    setShowTemplates(true);
  };

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>⚕️ Aktengenerator</h1>
        <p>Aktengenerator und Vorlagen</p>
      </div>

      <div className="app-content">
        {showTemplates ? (
          <div className="content-wrapper">
            <TemplateSelector onTemplateSelect={handleTemplateSelect} />
            <div className="manual-option">
              <button className="btn-manual" onClick={() => setShowTemplates(false)}>
                ✍️ Oder manuell neue Akte erstellen
              </button>
            </div>
          </div>
        ) : (
          <div className="content-wrapper">
            <ReportEditor report={report} onChange={setReport} />
            <CopyPasteExport report={report} />
            <div className="action-buttons">
              <button className="btn-new-report" onClick={handleNewReport}>
                📝 Neue Akte
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
