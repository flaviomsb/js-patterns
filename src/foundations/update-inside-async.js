async function update(callback) {
  new Promise((resolve) => {
    resolve(callback());
  });
}

(async () => {
  const list = [
    { id: 1, data: 4 },
    { id: 2, data: 5 },
    { id: 3, data: 6 },
  ];

  await update(() => {
    list.forEach(item => {
      item.data **= 2;
    });
  });

  console.log(JSON.stringify(list, null, 2));
})();
