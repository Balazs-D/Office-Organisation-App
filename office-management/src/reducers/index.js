const initState = {
  week: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  employees: [
    { name: 'Alex', available: false, dep: 'Tech' },
    { name: 'Bea', available: true, dep: 'PM' },
    { name: 'Carl', available: true, dep: 'HR' },
    { name: 'Dasha', available: true, dep: 'B-Dev' },
    { name: 'Eric', available: true, dep: 'Buss-Dev' },
    { name: 'Francesca', available: true, dep: 'F-Dev' },
    { name: 'Gabriella', available: true, dep: 'OM' }
  ]
};

function rootReducer(state = initState, action){
    return state;
};

export default rootReducer;