const arr1 = [
  {
    id: 1,
    name: 'Object #1',
    images: [{ id: 1, path: 'photo1.png' }],
    videos: [
      { id: 1, path: 'video1.mp4' },
      { id: 3, path: 'video3.mp4' },
    ],
  },
  {
    id: 2,
    name: 'Object #2',
    images: [
      { id: 22, path: 'photo22.png' },
      { id: 13, path: 'photo13.png' },
    ],
    videos: [{ id: 3, path: 'video3.mp4' }],
  },
  {
    id: 3,
    name: 'Object #3',
    images: [{ id: 5, path: 'photo5.png' }],
    videos: [
      { id: 7, path: 'video7.mp4' },
      { id: 23, path: 'video23.mp4' },
      { id: 12, path: 'video12.mp4' },
    ],
  },
];

const arr2 = [
  {
    id: 1,
    name: 'Object #1',
    images: [{ id: 1, path: 'photo1.png' }],
    videos: [
      { id: 1, path: 'video1.mp4' },
      { id: 3, path: 'video3.mp4' },
    ],
  },
  {
    id: 2,
    name: 'Object #2',
    images: [
      { id: 22, path: 'photo22.png' },
      { id: 13, path: 'photo13.png' },
    ],
    videos: [{ id: 3, path: 'video3.mp4' }],
  },
];

const merged = [...arr1, ...arr2].filter(
  (obj, index, item) => index === item.findIndex((o) => o.id === obj.id),
);

console.log(JSON.stringify(merged, null, 2));
