export function generateAIEmployeeData() {
  const profiles = [
    { type: 'valid', first: 'Aarav', last: 'Sharma' },
    { type: 'valid', first: 'Emma', last: 'Smith' },
    { type: 'edge', first: 'A', last: 'B' },
    { type: 'edge', first: 'Test123', last: 'User456' }
  ];

  const profile = profiles[Math.floor(Math.random() * profiles.length)];
  const timestamp = Date.now();

  return {
    firstName: `${profile.first}${timestamp}`,
    middleName: 'AI',
    lastName: profile.last,
    type: profile.type
  };
}