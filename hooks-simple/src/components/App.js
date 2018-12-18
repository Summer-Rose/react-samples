import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';

//functional component using hooks
const App = () => {
  //'resource' is the current value (can use any variable name we want)
  //equivalent to this.state.resource
  //'setResource' is equivalent to calling 'setState' in a function based comp.
  //'posts' is the inital value of this piece of state
  //equivalent to state = { resource: 'posts'}
  //in hooks, we usually only need access to one variable so not an object
  const [resource, setResource] = useState('posts');
  //can have multiple hooks. Ex:
  //const [currentCount, setCount] = useState(0);

  //Example of array destructuring:
  // const colors = ['red', 'green'];
  // const myColorOne = colors[0];
  // const [colorOne, colorTwo] = colors;
  // array destructuring - creates new variables with keys
  // colorOne and colorTwo and assigns the values of red and green respectively

  return (
    <div>
      <UserList />
      <div>
        <button onClick={() => setResource('posts')}>Posts</button>
        <button onClick={() => setResource('todos')}>Todos</button>
      </div>
      <ResourceList resource={resource} />
    </div>
  );
}

//Basic app component with component level state
// class App extends React.Component {
//   state = { resource: 'posts' };
//
//   render() {
//     return (
//       <div>
//         <div>
//           <button onClick={() => this.setState({ resource: 'posts'})}>Posts</button>
//           <button onClick={() => this.setState({ resource: 'todos'})}>Todos</button>
//         </div>
//         {this.state.resource}
//       </div>
//     );
//   }
// }

export default App;
