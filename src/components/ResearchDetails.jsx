const ResearchDetails = ({ abstract, introduction, methodology, findings, conclusion }) => (
  <section className="pa4 w-60-l center">
    <h3 className="f4">Abstract</h3>
    <p>{abstract}</p>
    <h3 className="f4">Detailed Description</h3>
    <h4 className="f5 mt3">Introduction</h4>
    <p>{introduction}</p>
    <h4 className="f5 mt3">Methodology</h4>
    <p>{methodology}</p>
    <h4 className="f5 mt3">Findings</h4>
    <p>{findings}</p>
    <h4 className="f5 mt3">Conclusion</h4>
    <p>{conclusion}</p>
  </section>
);

export default ResearchDetails;
