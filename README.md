# 🏥 Medic RP Aktengenerator v2

Ein moderner, flexibler Aktengenerator für Medic RP auf StateV. Mit diesem Tool kannst du schnell und einfach medizinische Akten erstellen, verwalten und exportieren.

## ✨ Features

### 📋 Modulare Bausteine
- **👤 Patienteninformationen**: Erfasse alle wichtigen Patientendaten
- **📝 Allgemeine Informationen**: Beschwerden, Diagnose, Notizen und Nachverfolgung
- **🩹 Verletzungen**: Detaillierte Erfassung mit Vorlagen
- **🏥 Behandlungen**: Dokumentiere durchgeführte Behandlungen
- **💊 Medikation**: Verwende und dokumentiere Medikamente
- **📤 Exportieren**: Speichere Akten als JSON oder HTML

### 🎯 Verletzungsvorlagen
Der Generator enthält **15+ vordefinierte Vorlagen** für häufige Verletzungen im RP-Alltag:

#### Trauma
- Stichverletzungen
- Schussverletzungen
- Stumpfe Traumata
- Verbrennungen
- Stromschlag
- Ertrinken/Asphyxie

#### Frakturen
- Armfrakturen
- Beinfrakturen
- Rippenfrakturen
- Schädelbasisfrakturen

#### Weitere Kategorien
- Vergiftungen & Überdosis
- Gasvergiftung
- Wundinfektionen
- Sepsis
- Unterkühlung
- Und mehr...

Jede Vorlage enthält:
- ✓ Beschreibung und Symptome
- ✓ Häufige Lokalisierungen
- ✓ Typische Behandlungsmethoden
- ✓ Empfohlene Medikamente
- ✓ Geschätzte Heilungszeit
- ✓ Warnhinweise und Komplikationen

## 🚀 Schnellstart

### Installation
```bash
npm install
```

### Entwicklungsserver
```bash
npm run dev
```
Die Anwendung ist dann unter [http://localhost:5173](http://localhost:5173) verfügbar.

### Production Build
```bash
npm run build
```

## 📁 Projektstruktur

```
src/
├── components/          # React Komponenten für Bausteine
│   ├── PatientBlock.tsx
│   ├── InjuryBlock.tsx
│   ├── TreatmentBlock.tsx
│   ├── MedicationBlock.tsx
│   ├── InfoBlock.tsx
│   ├── ExportBlock.tsx
│   └── index.ts
├── types/              # TypeScript Typdefinitionen
│   └── index.ts
├── data/               # Vordefinierte Daten
│   └── injuryTemplates.ts
├── hooks/              # Custom React Hooks
│   └── useMedicFileStore.ts
├── styles/             # CSS Dateien
│   ├── app.css
│   └── blocks.css
├── App.tsx            # Hauptkomponente
├── main.tsx           # Entry Point
└── index.css          # Globale Styles
```

## 💻 Verwendung

### 1. Neue Akte erstellen
- Klicke auf "Neue Akte" um mit einer leeren Vorlage zu starten

### 2. Patientendaten eingeben
- Fülle die Patienteninformationen aus (Name, Geburtsdatum, etc.)

### 3. Symptome und Diagnose dokumentieren
- Erfasse die Beschwerden des Patienten
- Gib deine Diagnose ein
- Füge Notizen hinzu wenn nötig

### 4. Verletzungen hinzufügen
- Nutze eine vordefinierte Vorlage oder
- Erstelle eine benutzerdefinierte Verletzung
- Verfolge den Heilungsprogress mit dem Schieberegler

### 5. Behandlungen und Medikamente dokumentieren
- Alle durchgeführten Behandlungen erfassen
- Verordnete Medikamente mit Dosierung und Häufigkeit

### 6. Exportieren
- **JSON**: Zum Speichern, Teilen oder Import in andere Systeme
- **HTML**: Zum Drucken oder Ansicht im Browser

## 🎨 Technologie Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite 7
- **State Management**: Zustand
- **Styling**: CSS 3 mit Grid/Flexbox

## 📊 Schweregrade

Jeden Verletzung kann ein Schweregrad zugeordnet werden:
- 🟡 **Leicht**: Einfache Verletzungen, kurze Heilungszeit
- 🟠 **Mittel**: Moderate Verletzungen mit gutem Aussicht auf Heilung
- 🔴 **Schwer**: Ernsthafte Verletzungen, längere Behandlung nötig
- ⚫ **Kritisch**: Lebensbedrohliche Verletzungen

## 🔧 Entwicklung

### Dependencies installieren
```bash
npm install
```

### TypeScript kompilieren
```bash
npm run build
```

### Entwicklung mit Hot-Reload
```bash
npm run dev
```

## 📝 Lizenz

Dieses Projekt ist für die Verwendung in StateV Medic RP konzipiert.

## 🤝 Beitragen

Fehler gefunden oder Feature-Wünsche?
- Neue Verletzungsvorlagen hinzufügen
- UI/UX Verbesserungen
- Fehlerbehebungen

## ❓ FAQ

**Q: Kann ich meine Akten speichern?**
A: Ja! Exportiere als JSON und speichere die Datei. Du kannst sie später wieder öffnen.

**Q: Kann ich die Vorlagen anpassen?**
A: Der Code ist offen und du kannst neue Vorlagen in `src/data/injuryTemplates.ts` hinzufügen.

**Q: Funktioniert das Offline?**
A: Ja, die Anwendung läuft vollständig lokal im Browser.

**Q: Kann ich mehrere Patienten gleichzeitig verwalten?**
A: Aktuell wird jeweils eine Akte pro Sitzung bearbeitet. Exportiere zum Speichern und starte eine neue Akte.

---

**Version**: 2.0.0  
**Letzte Aktualisierung**: Februar 2026
