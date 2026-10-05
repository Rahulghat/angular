const firstNames = [
  'Jasmine', 'Emily', 'Marcus', 'David', 'Priya', 'Arjun', 'Olivia', 'Liam', 'Sophia',
  'Noah', 'Ava', 'Ethan', 'Mia', 'Lucas', 'Isabella', 'James', 'Charlotte', 'Benjamin',
  'Amelia', 'Henry', 'Harper', 'Elijah', 'Ella', 'Alexander', 'Grace', 'Daniel', 'Scarlett',
  'Michael', 'Chloe', 'Matthew', 'Lily', 'Sebastian', 'Nora', 'Logan', 'Zoe', 'Jack',
  'Hannah', 'Leo', 'Layla', 'Owen', 'Avery', 'Wyatt', 'Sofia', 'Julian', 'Camila', 'Nathan',
  'Aurora', 'Isaac', 'Madison', 'Samuel', 'Leah'
];

const lastNames = [
  'Washington', 'Thompson', 'Johnson', 'Miller', 'Patel', 'Singh', 'Clark', 'Brown', 'Moore',
  'Taylor', 'Anderson', 'Thomas', 'Jackson', 'White', 'Harris', 'Martin', 'Lee', 'Walker',
  'Hall', 'Allen', 'Young', 'King', 'Wright', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson',
  'Carter', 'Mitchell', 'Perez', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans',
  'Edwards', 'Collins', 'Stewart', 'Sanchez', 'Morris', 'Rogers', 'Reed', 'Cook', 'Morgan',
  'Brooks', 'Price', 'Bell', 'Hughes'
];

export const DUMMY_USERS = Array.from({ length: 50 }, (_, index) => ({
  id: `u${index + 1}`,
  name: `${firstNames[index]} ${lastNames[index]}`,
  avatar: `https://i.pravatar.cc/150?img=${(index % 70) + 1}`,
}));
