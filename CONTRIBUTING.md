# CONTRIBUTING - Verletzungsvorlagen erweitern

Dieser Guide zeigt dir, wie du neue Verletzungsvorlagen zum Aktengenerator hinzufügst.

## Vorlage hinzufügen

### 1. Die `injuryTemplates.ts` Datei öffnen
Öffne `src/data/injuryTemplates.ts`

### 2. Neue Vorlage erstellen
Füge ein neues Objekt vom Typ `InjuryTemplate` zum Array hinzu:

```typescript
{
  id: 'unique-id-here',
  name: 'Name der Verletzung',
  description: 'Kurze Beschreibung was diese Verletzung ist',
  severity: 'Mittel', // Leicht, Mittel, Schwer, oder Kritisch
  commonLocations: ['Ort1', 'Ort2', 'Ort3'],
  treatments: ['Behandlung1', 'Behandlung2'],
  commonMedications: ['Medikament1', 'Medikament2'],
  estimatedHealingTime: '2-4 Wochen',
  warnings: ['Warnung1', 'Warnung2'],
  category: 'Trauma', // Trauma, Fraktur, Verbrennung, Vergiftung, Infektion, Sonstiges
}
```

## Beispiel: Neue Fraktur hinzufügen

```typescript
{
  id: 'fracture-collarbone',
  name: 'Schlüsselbeinbruch (Klavikula)',
  description: 'Bruch des Schlüsselbeins, oft durch direkten Schlag oder Sturz auf Schulter',
  severity: 'Mittel',
  commonLocations: ['Schulter', 'Oberes Brustbein'],
  treatments: ['Röntgen', 'Schultergurt', 'Schmerztherapie', 'Physiotherapie'],
  commonMedications: ['Schmerzmittel', 'Entzündungshemmer'],
  estimatedHealingTime: '4-6 Wochen',
  warnings: ['Nervenschädigung möglich', 'Gefäßverletzung überprüfen'],
  category: 'Fraktur',
}
```

## Wichtige Informationen

### IDs
- Muss **eindeutig** sein
- Verwende Kebab-Case (z.B. `injury-type-location`)
- Keine Sonderzeichen oder Umlaute

### Categories
Wähle eine passende Kategorie:
- **Trauma**: Verletzungen durch stumpfe oder scharfe Gewalt
- **Fraktur**: Knochenbrüche
- **Verbrennung**: Thermische Verletzungen
- **Vergiftung**: Vergiftungen und toxische Substanzen
- **Infektion**: Infektionen und Entzündungen
- **Sonstiges**: Alles andere

### Severity Levels
- **Leicht**: Wenige Symptome, schnelle Heilung, keine Komplikationen
- **Mittel**: Moderate Symptome, normale Heilung, einige Vorsichtsmaßnahmen nötig
- **Schwer**: Ernsthafte Symptome, längere Heilung, ständige Überwachung erforderlich
- **Kritisch**: Lebensbedrohliche Symptome, intensive Behandlung erforderlich

## Best Practices

1. **Realistische Daten verwenden**
   - Verwende echte medizinische Informationen wo möglich
   - Recherchiere Heilungszeiten und Behandlungen

2. **Beschreibung aussagekräftig machen**
   - Sie wird beim Ausfüllen angezeigt
   - Hilft bei der Entscheidung, ob die Vorlage passt

3. **Mehrere Behandlungsoptionen**
   - Mindestens 2-3 Behandlungen pro Vorlage
   - Sie werden als Dropdown angeboten

4. **Warningen nicht vergessen**
   - Wichtige Komplikationen aufzählen
   - Helfen bei der RP-Immersion

## Neue Kategorie hinzufügen

Wenn keine vorhandene Kategorie passt:

1. Füge die Kategorie zu den `injuryCategories` hinzu:
```typescript
export const injuryCategories = {
  'Neue Kategorie': { color: '#hexcode', icon: 'emoji' },
  // ... rest
};
```

2. Verwende sie als `category` in der Vorlage

## Testen

Nach dem Hinzufügen:
1. Speichere die Datei
2. Der Dev-Server aktualisiert automatisch
3. Öffne eine neue Verletzung
4. Deine neue Vorlage sollte in der Dropdown-Liste der Vorlagen sichtbar sein

## Weitere Tipps

- **Emojis in Namen**: Verwende sie sparsam, aber sie machen die Vorlagen visueller
- **Lokalisierungen**: Seien spezifisch (z.B. "Oberschenkel" statt nur "Bein")
- **Realismus**: Denke daran, dass das für ein RP-Spiel ist - Immersion zählt!

---

Danke, dass du zum Projekt beiträgst! 🎉
