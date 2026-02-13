import React from 'react';
import '../styles/blocks.css';

export interface BlockConfig {
  key: string;
  label: string;
  icon: string;
  type: 'textarea' | 'text' | 'medications';
  rows?: number;
  visible: boolean;
}

interface BlockProps {
  config: BlockConfig;
  value: string;
  onChange: (value: string) => void;
  onToggleVisibility: () => void;
  onRemove?: () => void;
}

export const Block: React.FC<BlockProps> = ({
  config,
  value,
  onChange,
  onToggleVisibility,
  onRemove,
}) => {
  if (!config.visible) return null;

  return (
    <div className="block">
      <div className="block-header">
        <label className="block-label">
          <span className="block-icon">{config.icon}</span>
          <span className="block-title">{config.label}</span>
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
          {onRemove && (
            <button
              className="btn-block-remove"
              onClick={onRemove}
              title="Block entfernen"
              aria-label="Entfernen"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="block-content">
        {config.type === 'textarea' ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Geben Sie hier Informationen zu ${config.label.toLowerCase()} ein...`}
            rows={config.rows || 4}
            className="block-input"
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={`Geben Sie hier ${config.label.toLowerCase()} ein...`}
            className="block-input"
          />
        )}
      </div>
    </div>
  );
};
