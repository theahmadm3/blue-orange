import { useParams } from 'react-router-dom';
import { students } from '../data/students';
import ProfileSection from '../components/ProfileSection';
import ResearchDetails from '../components/ResearchDetails';
import AdditionalInformation from '../components/AdditionalInformation';

function StudentPage() {
  const { id } = useParams();
  const student = students.find(student => student.id === parseInt(id));

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
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
