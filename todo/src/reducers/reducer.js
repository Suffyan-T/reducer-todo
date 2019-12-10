
export const initialState = [
        {
            item: 'Build a simple reducer and initial state',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Set up state in your component',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Adding todos',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Toggle the completed field',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Clearing completed todos',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Styling',
            completed: false,
            id: 3892987589
        }
    ];


    function reducer(state, action) {
        switch (action.type) {
          case 'ADDTODO':
            // code here
          case 'TOGGLETODO':
            // code here
          case 'REMOVETODO':
            // code here
          default:
            return state
        }
      }