const projectsData = {
  tasks: [
    {
      id: 1,
      tag: 'Low',
      title: 'Brainstorming',
      description:
        "Brainstorming brings team members' diverse experience into play.",
      users: [
        '/src/assets/invite-img-1.png',
        '/src/assets/invite-img-4.png',
        '/src/assets/invite-img-3.png',
      ],
      comments: 12,
      files: 0,
    },
    {
      id: 2,
      tag: 'High',
      title: 'Research',
      description:
        'User research helps you to create an optimal product for users.',
      users: ['/src/assets/invite-img-2.png', '/src/assets/invite-img-5.png'],
      comments: 10,
      files: 5,
    },
    {
      id: 3,
      tag: 'High',
      title: 'Wireframes',
      description:
        'Low fidelity wireframes include the most basic content and visuals.',
      users: [
        '/src/assets/invite-img-1.png',
        '/src/assets/invite-img-2.png',
        '/src/assets/invite-img-4.png',
      ],
      comments: 10,
      files: 3,
    },
    {
      id: 4,
      tag: 'Low',
      title: 'Onboarding Illustrations',
      img: ['/src/assets/onboarding.png'],
      users: [
        '/src/assets/invite-img-3.png',
        '/src/assets/invite-img-4.png',
        '/src/assets/invite-img-1.png',
      ],
      comments: 14,
      files: 15,
    },
    {
      id: 5,
      tag: 'Low',
      title: 'Moodboard',
      img: ['/src/assets/moodboard-1.png', '/src/assets/moodboard-2.png'],
      users: ['/src/assets/invite-img-3.png'],
      comments: 9,
      files: 10,
    },
    {
      id: 6,
      tag: 'Completed',
      title: 'Mobile App Design',
      img: ['/src/assets/mobile-app.png'],
      users: ['/src/assets/invite-img-5.png', '/src/assets/invite-img-4.png'],
      comments: 12,
      files: 15,
    },
    {
      id: 7,
      tag: 'Completed',
      title: 'Design System',
      description: 'It just needs to adapt the UI from what you did before ',
      users: [
        '/src/assets/invite-img-1.png',
        '/src/assets/invite-img-4.png',
        '/src/assets/invite-img-3.png',
      ],
      comments: 12,
      files: 15,
    },
  ],
  columns: [
    {
      id: 'column-1',
      title: 'To Do',
      count: 4,
      taskIds: [1, 2, 3, 4, 5, 6, 7],
    },
    {
      id: 'column-2',
      title: 'On Progress',
      count: 3,
      taskIds: [],
    },
    {
      id: 'column-3',
      title: 'Done',
      count: 2,
      taskIds: [],
    },
  ],
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default projectsData;
