import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  useNodesState,
  useEdgesState,
  Controls,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { v4 as uuidv4 } from 'uuid';

import { checkValidCourse, convertCourseToNodes, generateConnections, generateConnection } from './courseUtils';
import CourseNode from './CourseNode'
import Sidebar from './Sidebar';
import './index.css';

const nodeTypes = {
  selectorNode: CourseNode,
};

const courses = [
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

const courseList = [
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
    term: '2A',
    prereq: ['MSCI 101'],
    antireq: []
  }
]

// const initialNodes = [
//   {
//     id: '1',
//     type: 'selectorNode',
//     data: { 
//       label: 'input node',
//       term: '1A',
//       course: "ME 250"
    
//     },
//     sourcePosition: 'right',
//     targetPosition: 'left',
//     position: { x: 250, y: 50 },
//   },
//   {
//     id: '2',
//     data: { label: 'sksks' },
//     sourcePosition: 'right',
//     targetPosition: 'left',
//     position: { x: 250, y: 5 },
//   },
// ];

const initialNodes = convertCourseToNodes(courses)
const initialEdges = generateConnections(initialNodes)
console.log('edges')
console.log(initialEdges)

const PlanCourses = () => {
  const reactFlowWrapper = useRef(null);
  // const [nodes, setNodes, onNodesChange] = useNodesState(convertCourseToNodes(courses))
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  useEffect(() => {
    console.log('edges')
    console.log(edges)
  }, [edges])

  useEffect(() => {
    console.log('nodes')
    console.log(nodes)
  }, [nodes])

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

  const createClassNode = useCallback(
    (selectedCourse, term) => {
      const type = 'selectorNode'
    
      console.log(selectedCourse)
      // TODO:  add connections 
      const validity = checkValidCourse(selectedCourse, nodes, term)
      console.log('validity: ')
      console.log(validity)

      if (!validity.valid){
        // TODO: popup error 
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


    },
    [reactFlowInstance]
  )

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
        />
      </ReactFlowProvider>
    </div>
  );
};

export default PlanCourses;
