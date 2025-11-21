import React from 'react';

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface BrandAnalysis {
  archetype: string;
  tagline: string;
  toneOfVoice: string[];
  strategicPillars: {
    title: string;
    description: string;
  }[];
  visualDirection: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}