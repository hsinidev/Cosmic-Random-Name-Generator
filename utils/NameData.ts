
export type Gender = 'Any' | 'Male' | 'Female';
export type Format = 'Full Name' | 'First Name Only' | 'Last Name Only';

const maleFirstNames: string[] = [
  'James', 'John', 'Robert', 'Michael', 'William', 'David', 'Richard', 'Joseph',
  'Charles', 'Thomas', 'Christopher', 'Daniel', 'Matthew', 'Anthony', 'Mark',
  'Donald', 'Steven', 'Paul', 'Andrew', 'Joshua', 'Kevin', 'Brian', 'George',
  'Edward', 'Ronald', 'Timothy', 'Jason', 'Jeffrey', 'Ryan', 'Jacob', 'Gary',
  'Nicholas', 'Eric', 'Jonathan', 'Stephen', 'Larry', 'Justin', 'Scott', 'Brandon',
  'Benjamin', 'Samuel', 'Gregory', 'Frank', 'Alexander', 'Raymond', 'Patrick',
  'Jack', 'Dennis', 'Jerry', 'Tyler', 'Aaron', 'Jose', 'Adam', 'Henry', 'Nathan'
];

const femaleFirstNames: string[] = [
  'Mary', 'Patricia', 'Jennifer', 'Linda', 'Elizabeth', 'Barbara', 'Susan',
  'Jessica', 'Sarah', 'Karen', 'Nancy', 'Lisa', 'Margaret', 'Betty', 'Sandra',
  'Ashley', 'Dorothy', 'Kimberly', 'Emily', 'Donna', 'Michelle', 'Carol', 'Amanda',
  'Melissa', 'Deborah', 'Stephanie', 'Rebecca', 'Sharon', 'Laura', 'Cynthia',
  'Kathleen', 'Amy', 'Shirley', 'Angela', 'Helen', 'Anna', 'Brenda', 'Pamela',
  'Nicole', 'Emma', 'Samantha', 'Katherine', 'Christine', 'Debra', 'Rachel',
  'Catherine', 'Carolyn', 'Janet', 'Ruth', 'Maria', 'Heather', 'Diane', 'Julie'
];

const neutralFirstNames: string[] = [
  'Alex', 'Jordan', 'Taylor', 'Casey', 'Riley', 'Jamie', 'Morgan', 'Cameron',
  'Avery', 'Parker', 'Rowan', 'Quinn', 'Skyler', 'Peyton', 'Kai', 'Dakota',
  'Devin', 'Hayden', 'Drew', 'Jesse', 'Emerson', 'Frankie', 'Sidney', 'Sage'
];

const lastNames: string[] = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson',
  'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson',
  'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker',
  'Young', 'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
  'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell',
  'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker'
];

const getRandomElement = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

export const generateNames = (quantity: number, gender: Gender, format: Format): string[] => {
  const results: string[] = [];
  
  for (let i = 0; i < quantity; i++) {
    let firstName: string;
    const lastName = getRandomElement(lastNames);

    if (gender === 'Male') {
      firstName = getRandomElement(maleFirstNames);
    } else if (gender === 'Female') {
      firstName = getRandomElement(femaleFirstNames);
    } else {
      const allFirstNames = [...maleFirstNames, ...femaleFirstNames, ...neutralFirstNames];
      firstName = getRandomElement(allFirstNames);
    }

    switch (format) {
      case 'Full Name':
        results.push(`${firstName} ${lastName}`);
        break;
      case 'First Name Only':
        results.push(firstName);
        break;
      case 'Last Name Only':
        results.push(lastName);
        break;
      default:
        results.push(`${firstName} ${lastName}`);
    }
  }
  
  return results;
};
