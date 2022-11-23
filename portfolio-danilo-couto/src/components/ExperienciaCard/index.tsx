const ExperienciaCard = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <time>{data.year}</time>
      <h1>{data.title}</h1>
      <h2>{data.company}</h2>
      <p>{data.desc}</p>
      {data.title.includes('Student') && (
        <button type="button">
          <a target="_blank" href={data.companyLink} rel="noreferrer">
            GitHub
          </a>
        </button>
      )}
      {data.title.includes('Desenvolvedor') && (
        <button type="button">
          <a download href="/Resume-Danilo-Couto.pdf">
            Baixar CV
          </a>
        </button>
      )}
      {data.title.includes('Viagem') && (
        <button type="button">
          <a target="_blank" href={data.companyLink} rel="noreferrer">
            Youtube
          </a>
        </button>
      )}
      {data.title.includes('Pousada') && (
        <button type="button">
          <a target="_blank" href={data.companyLink} rel="noreferrer">
            Site
          </a>
        </button>
      )}
      <span className="circle" />
    </div>
  </div>
);

export default ExperienciaCard;
