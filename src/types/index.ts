// Medic RP Aktengenerator Typen - Vereinfachte Struktur

export interface MedicReport {
  id: string;
  patientName: string;
  symptoms: string;
  medications: string[];
  preSiteVcTreatment: string;
  hospitalTreatment: string;
  surgeryReport: string;
  postCareFollowUp: string;
  specialties: string;
  treatingPersonnel: string;
  createdAt: Date;
  blocks: BlockConfig[];
}

export interface BlockConfig {
  id: string;
  type: BlockType;
  enabled: boolean;
  title: string;
  order: number;
}

export type BlockType = 
  | 'patientName' 
  | 'symptoms' 
  | 'medications'
  | 'preSite' 
  | 'hospital' 
  | 'surgery' 
  | 'followUp' 
  | 'specialties' 
  | 'personnel';

export interface InjuryTemplate {
  id: string;
  name: string;
  description: string;
  severity: 'Leicht' | 'Mittel' | 'Schwer' | 'Kritisch';
  category: 'Trauma' | 'Fraktur' | 'Verbrennung' | 'Vergiftung' | 'Infektion' | 'Sonstiges';
  symptoms: string;
  medications?: string[];
  preSiteVcTreatment: string;
  hospitalTreatment: string;
  surgeryReport?: string;
  postCareFollowUp: string;
  specialties?: string;
}

export interface CopyableReport {
  title: string;
  content: string;
  blocks: {
    label: string;
    value: string;
  }[];
}
