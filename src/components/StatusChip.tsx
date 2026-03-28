import React from 'react';

type StatusType = 'on-plan' | 'partial' | 'off-plan' | 'green' | 'yellow' | 'red';

interface StatusChipProps {
  status: StatusType;
  label?: string;
}

const StatusChip: React.FC<StatusChipProps> = ({ status, label }) => {
  const getColors = () => {
    switch (status) {
      case 'on-plan':
      case 'green':
        return 'bg-[#DCFCE7] text-[#166534] border-[#BBF7D0]';
      case 'partial':
      case 'yellow':
        return 'bg-[#FEF9C3] text-[#854D0E] border-[#FEF08A]';
      case 'off-plan':
      case 'red':
        return 'bg-[#FEE2E2] text-[#991B1B] border-[#FECACA]';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getDefaultLabel = () => {
    switch (status) {
      case 'on-plan': return 'On track';
      case 'partial': return 'Partial';
      case 'off-plan': return 'Off track';
      default: return status.charAt(0).toUpperCase() + status.slice(1);
    }
  };

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium border ${getColors()}`}>
      {label || getDefaultLabel()}
    </span>
  );
};

export default StatusChip;
