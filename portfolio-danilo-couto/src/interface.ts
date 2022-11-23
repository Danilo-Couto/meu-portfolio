import { ReactNode } from 'react';

interface IProjetos {
  title: string;
  type: string;
  thumbnail: string;
  id?: string;
  description?: string;
  link?: string;
  gitLink?: string;
}

export interface IProjetosProps {
  projetos: IProjetos[];
  changeMode?: Function;
}

export interface IProjetoProps {
  projeto: IProjetos;
  changeMode?: Function;
}

export interface IProjetoItemProps {
  title: string;
  type: string;
  thumbnail: string;
  id: string;
}

export interface IBannerProps {
  thumbnail: string;
}

export interface IBannerProjectProps {
  title: string;
  type: string;
  thumbnail: string;
}

export interface ConhecimentoProps {
  title: string;
  icon: ReactNode;
}
