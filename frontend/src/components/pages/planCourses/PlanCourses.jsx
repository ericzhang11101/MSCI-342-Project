import React, { useState, useRef, useCallback, useEffect, useContext } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { v4 as uuidv4 } from 'uuid';

import { UserContext } from '../../../App';
import { checkValidCourse, convertCourseToNodes, generateConnections, generateConnection } from './courseUtils';
import CourseNode from './CourseNode'
import Sidebar from './Sidebar';
import './index.css';

const nodeTypes = {
  selectorNode: CourseNode,
};

const hardcodedCourses = [
  {
    name: "MSCI 100",
    term: '1A',
    prereq: [],
    antireq: ['ME 100']
  },
  {
    name: "MSCI 101",
    term: '1B',
    prereq: ["MSCI 100"],
    antireq: ['ME 101']

  }
]

const initialCourseList = [
  {
    name: "ECE 467",
    description: "Intro to my grandma",
    prereq: [],
    antireq: ["ME 250"]
  },
  {
    name: "ME 250",
    description: "Intro to my feet",
    prereq: [],
    antireq: []
  },
  {
    name: "MSCI 201",
    description: "Intro to my 201",
    prereq: ['MSCI 101'],
    antireq: []
  }
]

const initialNodes = convertCourseToNodes(hardcodedCourses)
const initialEdges = generateConnections(initialNodes)

const PlanCourses = () => {
  const reactFlowWrapper = useRef(null);
  // const [nodes, setNodes, onNodesChange] = useNodesState(convertCourseToNodes(courses))
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [courseList, setCourseList] = useState(initialCourseList)

  const {user} = useContext(UserContext)

  useEffect(() => {
    // load existing nodes/ edges 
    loadSavedCourses()
    loadCourses()
  }, [])

  useEffect(() => {
    console.log('edges')
    console.log(edges)
  }, [edges])

  useEffect(() => {
    console.log('nodes')
    console.log(nodes)
  }, [nodes])

  const handleErrorMessage = (message) => {
    setErrorMessage(message)
    setTimeout(() => {
      setErrorMessage('')
    }, 2000)
  }

  const onConnect = useCallback((params) => {
    console.log('adding edge')
    console.log(params)
    setEdges((eds) => addEdge(params, eds))
  }, []);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    console.log('dragging')
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      // TODO: check dependencies, add connections 

      // TODO: lock position to term 
      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: uuidv4(),
        type,
        position,
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const createClassNode = (selectedCourse, term) => {
      const type = 'selectorNode'
    
      console.log('selectedCourse')
      console.log(selectedCourse)
      // TODO:  add connections 
      console.log('checking nodes')
      console.log(nodes)
      const validity = checkValidCourse(selectedCourse, nodes, term)
      console.log('validity: ')
      console.log(validity)

      if (!validity.valid){
        // TODO: popup error
        handleErrorMessage(validity.message) 
      } else {
        // TODO: lock position to term 
        const position = reactFlowInstance.project({
          x: 20,
          y: 20,
        });

        const newNode = {
          id: uuidv4(),
          type,
          position,
          sourcePosition: 'right',
          targetPosition: 'left',
          name: selectedCourse.name,
          data: { 
            term,
            description: selectedCourse.description,
            name: selectedCourse.name
          },
        };

        const newEdges = generateConnection(newNode, nodes, selectedCourse)
        for (let newEdge of newEdges){
          setEdges((nds) => nds.concat(newEdge));
        }

        setNodes((nds) => nds.concat(newNode));

      }
  }

  const loadSavedCourses = async () => {
    if (user === undefined){
      handleErrorMessage("Please login to view your courses")
      return
    }

    const url = 'http://localhost:5000/'
    
    const res = await fetch(url + 'api/getCourses', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email
      })
    })
    .then((res) => res.json())
    .then((res) => res[0])
    

    console.log(res)

    const userEdges = JSON.parse(res.edges)
    const userNodes = JSON.parse(res.nodes)

    console.log('user stuff')
    console.log(userEdges)
    console.log(userNodes)

    setEdges(userEdges)
    setNodes(userNodes)
  }

  const saveCourses = async () => {

    if (user == undefined){
      handleErrorMessage("Please login to save courses")
      return 
    }
    
    console.log('user: ')
    console.log(user)

    const url = 'http://localhost:5000/'
    const res = await fetch(url + 'api/saveCourses', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nodes,
        edges,
        email: user.email
      })
    }).then((res) => res.json())
    

    console.log(res)
  }

  const loadCourses = async () => {
    const url = 'http://localhost:5000/'
    const res = await fetch(url + 'api/getAllCourses', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json())

    console.log(res)
    setCourseList(res)
  }

  return (
    <div className="dndflow">
      <ReactFlowProvider>
        <div className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
            fitView
          >
            <Controls />
          </ReactFlow>
        </div>
        <Sidebar 
          createClassNode={createClassNode}
          courseList={courseList}
          errorMessage={errorMessage}
          handleErrorMessage={handleErrorMessage}
          saveCourses={saveCourses}
        />
      </ReactFlowProvider>
    </div>
  );
};

export default PlanCourses;
