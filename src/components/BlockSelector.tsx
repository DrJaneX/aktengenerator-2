import React from 'react';
import type { BlockConfig } from './Block';
import '../styles/blocks.css';

interface BlockSelectorProps {
  blocks: BlockConfig[];
  onToggleBlock: (key: string) => void;
  onResetBlocks: () => void;
}

export const BlockSelector: React.FC<BlockSelectorProps> = ({
  blocks,
  onToggleBlock,
  onResetBlocks,
}) => {
  const visibleCount = blocks.filter((b) => b.visible).length;

  return (
    <div className="block-selector">
      <div className="block-selector-header">
        <h3>📋 Verfügbare Bausteine ({visibleCount}/{blocks.length})</h3>
        <button className="btn-reset-blocks" onClick={onResetBlocks}>
          🔄 Zurücksetzen
        </button>
      </div>

      <div className="block-selector-grid">
        {blocks.map((block) => (
          <label key={block.key} className="block-checkbox">
            <input
              type="checkbox"
              checked={block.visible}
              onChange={() => onToggleBlock(block.key)}
              className="block-checkbox-input"
            />
            <span className="block-checkbox-label">
              <span className="block-icon">{block.icon}</span>
              <span className="block-name">{block.label}</span>
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};
