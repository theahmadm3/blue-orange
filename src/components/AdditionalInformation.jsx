const AdditionalInformation = ({ publications, presentations, supervisors, relatedLinks }) => (
  <section className="pa4 bg-light-gray w-60-l center">
    <h3 className="f4">Publications</h3>
    <ul className="list pl0">
      {publications.map((pub, index) => <li key={index} className="pv2">{pub}</li>)}
    </ul>
    <h3 className="f4 mt4">Presentations</h3>
    <ul className="list pl0">
      {presentations.map((pres, index) => <li key={index} className="pv2">{pres}</li>)}
    </ul>
    <h3 className="f4 mt4">Supervisors</h3>
    <ul className="list pl0">
      {supervisors.map((sup, index) => <li key={index} className="pv2">{sup}</li>)}
    </ul>
    <h3 className="f4 mt4">Related Links</h3>
    <ul className="list pl0">
      {relatedLinks.map((link, index) => (
        <li key={index} className="pv2">
          <a href={link.url} className="link blue underline-hover">{link.name}</a>
        </li>
      ))}
    </ul>
  </section>
);

export default AdditionalInformation;
