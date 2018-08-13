export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const addJson = () => ({
  type: 'ADD_JSON',
  json:[
    {
      id: 1,
      name: "Кровать",
      creation_time: "2018-07-30T09:54:50.34746Z",
      category_id: 1,
      price: "11.1"
    },
    {
      id: 2,
      name: "Диван",
      creation_time: "2018-07-30T09:54:50.494292Z",
      category_id: 1,
      price: "11.2"
    },
    {
      id: 3,
      name: "Кресло",
      creation_time: "2018-07-30T09:54:50.625694Z",
      category_id: 1,
      price: "11.3"
    },
    {
      id: 4,
      name: "Шкаф",
      creation_time: "2018-07-30T09:54:50.771221Z",
      category_id: 2,
      price: "12.1"
    },
    {
      id: 5,
      name: "Тумба",
      creation_time: "2018-07-30T09:54:50.928313Z",
      category_id: 2,
      price: "12.2"
    },
    {
      id: 6,
      name: "Полки",
      creation_time: "2018-07-30T09:54:51.088874Z",
      category_id: 2,
      price: "12.3"
    },
    {
      id: 7,
      name: "Стол",
      creation_time: "2018-07-30T09:54:51.234638Z",
      category_id: 3,
      price: "13.1"
    },
    {
      id: 8,
      name: "Стул",
      creation_time: "2018-07-30T09:54:51.419259Z",
      category_id: 3,
      price: "13.2"
    },
    {
      id: 9,
      name: "Кресло-качалка",
      creation_time: "2018-07-30T09:54:51.549766Z",
      category_id: 3,
      price: "13.3"
    }
  ]
})