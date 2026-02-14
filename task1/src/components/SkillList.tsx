import { Skill, SkillLevel } from '../types';

interface SkillListProps {
  skills: Skill[];
}

const getLevelColor = (level: SkillLevel): string => {
  switch (level) {
    case 'Beginner':
      return '#4caf50';
    case 'Intermediate':
      return '#ff9800';
    case 'Expert':
      return '#f44336';
    default:
      return '#999';
  }
};

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {skills.map((skill) => (
        <li 
          key={skill.id}
          style={{
            padding: '8px',
            margin: '4px 0',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span>{skill.name}</span>
          <span 
            style={{
              backgroundColor: getLevelColor(skill.level),
              color: 'white',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '12px'
            }}
          >
            {skill.level}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
