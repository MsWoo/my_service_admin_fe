import {sidebarConfig} from "~/composables/app/config";

export interface SidebarConfig {
  idx: number;
  depth: number;
  title: string;
  type: 'internalLink' | 'externalLink' | 'expendMenu';
  link?: string;
  path?: string;
  children?: SidebarConfig[];
}

export const useSidebarConfig = () =>
    // useState<SidebarConfig[]>('sidebarConfig', () => {});
    useState<SidebarConfig[]>('sidebarConfig', () => sidebarConfig);