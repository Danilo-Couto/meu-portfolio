import { ReactNode } from 'react';

export interface ISectionTitleProps {
  title: string | ReactNode;
  description?: string | ReactNode;
}

export interface IExperienceProps {
  year: string;
  title: string;
  description: string;
}

export interface IStackProps {
  title: string;
  icon: ReactNode;
}

export interface INavLinkProps {
  title: string;
  path: string;
  includes?: boolean;
}

export interface ISNavLinkProps {
  isActive: boolean;
}

export interface IProjectProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
  description?: string;
  link?: string;
}

export interface IContainerProps {
  imgUrl: string;
}

export interface IBannerProjectProps {
  title: string;
  type: string;
  imgUrl: string;
}
