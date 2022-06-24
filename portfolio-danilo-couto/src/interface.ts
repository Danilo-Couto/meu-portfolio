interface IProjetos {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

export interface IProjetosProps {
  projetos: IProjetos[];
  changeMode: Function;
}

export interface IProjetoProps {
  projeto: IProjetos;
  changeMode: Function;
}
