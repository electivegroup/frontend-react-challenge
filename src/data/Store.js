let data = {
  lanes: [
    {
      id: "Lane1",
      title: "To Do",
      label: "2/2",
      incomplete: "0/0",
      complete: "0/0",
      cards: [
        {
          status: true,
          id: "Card2",
          title: "Hired Bernard yet?",
          description:
            "Click the title three times to edit and double click to stop editing.",
          label: "Fri Apr 19 2019 15:50:40 GMT+0100",
          tags: []
        },
        {
          status: false,
          id: "Card1",
          title: "Write Blog",
          description: "About successful release of product",
          label: "Fri Apr 19 2019 15:50:40 GMT+0100",
          tags: []
        }
      ]
    },
    {
      id: "Lane2",
      title: "In Progress",
      label: "0/0",
      incomplete: "0/0",
      complete: "0/0",
      cards: []
    },
    {
      id: "Lane3",
      title: "Done",
      label: "0/0",
      incomplete: "0/0",
      complete: "0/0",
      cards: []
    }
  ]
};

export const getData = () => data;
