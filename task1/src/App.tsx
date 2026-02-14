import UserCard from './components/UserCard';
import SkillList from './components/SkillList';
import { User, Skill } from './types';

const sampleUser: User = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  age: 28
};

const sampleSkills: Skill[] = [
  { id: 1, name: 'TypeScript', level: 'Intermediate' },
  { id: 2, name: 'React', level: 'Expert' },
  { id: 3, name: 'Node.js', level: 'Beginner' },
  { id: 4, name: 'CSS', level: 'Intermediate' }
];

function App() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>User Profile</h1>
      
      <UserCard user={sampleUser} isActive={true}>
        <div style={{ marginTop: '12px', padding: '12px', backgroundColor: '#f0f8ff', borderRadius: '4px' }}>
          <h4>Bio</h4>
          <p>Full-stack developer passionate about TypeScript and React.</p>
        </div>
      </UserCard>

      <h3>Skills</h3>
      <SkillList skills={sampleSkills} />

      <UserCard user={{ name: 'Inactive User', email: 'inactive@test.com', age: 35 }} isActive={false}>
        <p style={{ color: '#666' }}>This user is currently inactive.</p>
      </UserCard>
    </div>
  );
}

export default App;
