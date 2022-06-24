const ExperienciaCard = ({ data }) => (
  <div className="timeline-item">
    <div className="timeline-item-content">
      <time>{data.year}</time>
      <h1>{data.title}</h1>
      <h2>{data.company}</h2>
      <p>{data.desc}</p>
      <span className="circle" />
    </div>
  </div>
);

export default ExperienciaCard;
