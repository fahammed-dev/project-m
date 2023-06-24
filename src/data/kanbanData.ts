const data = {
  tasks: {
    1: {
      id: 1,
      tag: 'Low',
      title: 'Brainstorming',
      description:
        "Brainstorming brings team members' diverse experience into play.",
      users: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
      ],
      comments: 12,
      files: 0,
    },
    2: {
      id: 2,
      tag: 'High',
      title: 'Research',
      description:
        'User research helps you to create an optimal product for users.',
      users: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
      ],
      comments: 10,
      files: 5,
    },
    3: {
      id: 3,
      tag: 'High',
      title: 'Wireframes',
      description:
        'Low fidelity wireframes include the most basic content and visuals.',
      users: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
      ],
      comments: 10,
      files: 3,
    },
    4: {
      id: 4,
      tag: 'Low',
      title: 'Onboarding Illustrations',
      img: ['/src/assets/onboarding.png'],
      users: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
      ],
      comments: 14,
      files: 15,
    },
    5: {
      id: 5,
      tag: 'Low',
      title: 'Moodboard',
      img: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
      ],
      users: ['/src/assets/invite-img-3.png'],
      comments: 9,
      files: 10,
    },
    6: {
      id: 6,
      tag: 'Completed',
      title: 'Mobile App Design',
      img: ['/src/assets/mobile-app.png'],
      users: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
      ],
      comments: 12,
      files: 15,
    },
    7: {
      id: 7,
      tag: 'Completed',
      title: 'Design System',
      description: 'It just needs to adapt the UI from what you did before ',
      users: [
        {
          id: 1,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 2,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
        {
          id: 3,
          src: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        },
      ],
      comments: 12,
      files: 15,
    },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      count: 4,
      taskIds: [1, 2, 3, 4, 5, 6, 7],
    },
    'column-2': {
      id: 'column-2',
      title: 'On Progress',
      count: 3,
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      count: 2,
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default data;
