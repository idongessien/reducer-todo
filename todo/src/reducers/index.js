const initialState = [ // default render info
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
    }
]

const todoReducer = (state, action) => {
    switch (action.type) {
        case 'NEW_TODO': 
            return [...state, action.payload]
        case 'MARK_COMPLETE':
            return [...state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed } : todo)];
        case 'CLEAR_COMPLETED':
            return [...state.filter(todo => !todo.completed)]
        case 'CLEAR_ALL':
            return [];
        default: 
            return state;
    }
}

export { initialState, todoReducer };