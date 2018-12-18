import React from 'react';
// import React, { useState, useEffect } from 'react';
//import axios from 'axios';
import useResources from './useResources';

const ResourceList = ({ resource }) => {
  // const [resources, setResources] = useState([]);
  //
  //
  // const fetchResource = async (res) => {
  //   const response = await axios.get(
  //     `https://jsonplaceholder.typicode.com/${res}`);
  //   setResources(response.data);
  // }
  //
  // //useEffect -- essentially combines effect of componentDidMount
  // //and componentDidUpdate
  // useEffect(() => {
  //   fetchResource(resource)
  // }, [resource]);// this array holds thas previous value
  //useEffect doesn't run function if the value it's being passed
  //is the same as the one it received before
  //passing an arrow function to useEffect  WITHOUT that array, means that
  //the function inside will be called 100% of the time:
  // useEffect(() => {
  //   fetchResource(resource)
  // });
  //If an object is passed to the array after useEffect, the functon inside
  //will be called 100% of the time even if the last object is the same as the current object


  //shortened example:
  // useEffect(() => {
  //   (async (res) => {
  //     const response = await axios.get(
  //       `https://jsonplaceholder.typicode.com/${res}`);
  //     setResources(response.data);
  //   })(resource)
  // }, [resource]);

  // () => console.log('hi') //does't run, just declares function
  // const hi = () => console.log('hi') //declares functioun
  // hi() // calls function
  // (() => console.log('hi'))() //declares function AND calls it;

  const resources = useResources(resource);

  return (
    <ul>
      {resources.map(record => <li key={record.id}>{record.title}</li>)}
    </ul>
  );

}


//more complicated class version
// class ResourceList extends React.Component {
//   state = { resources: [] };
//
//   async componentDidMount() {
//     const response = await axios.get(
//       `https://jsonplaceholder.typicode.com/${this.props.resource}`);
//     this.setState({ resources: response.data });
//   }
//
//   async componentDidUpdate(prevProps) {
//     if (prevProps.resource !== this.props.resource) {
//       const response = await axios.get(
//         `https://jsonplaceholder.typicode.com/${this.props.resource}`);
//       this.setState({ resources: response.data });
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         {this.state.resources.length}
//       </div>
//     );
//   }
// }

export default ResourceList;
