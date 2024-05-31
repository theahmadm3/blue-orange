import { Link, useParams } from 'react-router-dom';
import { students } from '../data/students';
import ProfileSection from '../components/ProfileSection';
import ResearchDetails from '../components/ResearchDetails';
import AdditionalInformation from '../components/AdditionalInformation';

function StudentPage() {
  const { id } = useParams();
  const student = students.find(student => student.id === parseInt(id));

  if (!student) {
    return <div className='w-100 flex flex-column items-center justify-center f2' style={{ minHeight: '400px' }}>
      <p className=''>Candidate not found</p>
      <Link to='/' className="link black underline dim">
        <h6>Go back to Homepage</h6>
      </Link>
    </div>;
  }

  return (
    <div>
      <div id="profile" className='pa2 flex items-center justify-center'>
        <Link to='/' style={{ outline: '0' }} className='w-60-l center black link dim pa2 inline-flex items-center pointer'>
          <i className="material-icons">arrow_left</i><span>Back</span>
        </Link>
      </div>
      <ProfileSection
        photo={student.avatar}
        name={student.name}
        researchArea={student.topic}
        contact={{ email: student.email }}
      />
      <ResearchDetails
        abstract={student.abstract}
        introduction={student.introduction}
        methodology={student.methodology}
        findings={student.findings}
        conclusion={student.conclusion}
      />
      <AdditionalInformation
        publications={student.publications}
        presentations={student.presentations}
        supervisors={[student.supervisor, student.supervisor2]}
        relatedLinks={student.publicationLink}
      />
    </div>
  );
}

export default StudentPage;
