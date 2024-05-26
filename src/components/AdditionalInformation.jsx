const AdditionalInformation = ({ publications, presentations, supervisors, relatedLinks }) => (
    <section className="pa4">
      <h3 className="f4">Publications</h3>
      <ul>
        {publications.map((pub, index) => <li key={index}>{pub}</li>)}
      </ul>
      <h3 className="f4">Presentations</h3>
      <ul>
        {presentations.map((pres, index) => <li key={index}>{pres}</li>)}
      </ul>
      <h3 className="f4">Supervisors</h3>
      <ul>
        {supervisors.map((sup, index) => <li key={index}>{sup}</li>)}
      </ul>
      <h3 className="f4">Related Links</h3>
      <ul>
        {relatedLinks.map((link, index) => <li key={index}><a href={link.url} className="link blue">{link.name}</a></li>)}
      </ul>
    </section>
  );
  
  export default AdditionalInformation;
  