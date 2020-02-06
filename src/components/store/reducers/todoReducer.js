const initState = {
    todos:[]
}

  const todoReducer = (state = initState, action) => {
    switch(action.type){
      case 'ADD_TODO':
        console.log('new todo',action.newTodo)
        return {
          todos : [...state.todos, action.newTodo]
        };
      case 'DEL_TODO':  
      console.log('new todo',action.id)
      return {
        todos: [...state.todos.filter(todo=>
          todo.id !== action.id
          )]
        
      };
      case 'COMPLETE_TODO':
      console.log('new todo',action.todo.id)
      return {
        todos:[...state.todos.map((res)=>{
          
           if(action.todo.id===res.id){
            console.log(res)
           const a={
              id:res.id,
              title:res.title,
              completed: !res.completed
            }
            return a;
           }
           else{
             return res
           }
          })]
        
      };
      case 'FETCH_TODOS':
        return{

          todos:[...state.todos, action.todos]
        }
      default :
      return state
    }
    
  };
  
  export default todoReducer;