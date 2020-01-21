
export const initialState = [
        {
            item: 'Build a simple reducer and initial state',
            completed: true,
            id: 1
        },
        {
            item: 'Set up state in your component',
            completed: true,
            id: 2
        },
        {
            item: 'Adding todos',
            completed: false,
            id: 3
        },
        {
            item: 'Toggle the completed field',
            completed: false,
            id: 4
        },
        {
            item: 'Clearing completed todos',
            completed: false,
            id: 5
        },
        {
            item: 'Styling',
            completed: false,
            id: 6
        }
    ];


export function reducer(state, action) {
        switch (action.type) {
          case 'ADD_TODO':
            return [
              ...state,
              action.payload
          ]
          case 'TOGGLE_TODO':
            return state.map((item) => {
              return item.id === action.payload ?
              {...item, completed: !item.completed} :
              item
          })
          case 'REMOVE_COMPLETED_TODO':
            return state.filter((item) => !item.completed)

          default:
            return state
        }
      }
