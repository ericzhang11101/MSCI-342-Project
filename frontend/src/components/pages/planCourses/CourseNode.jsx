import { Typography, Stack, Button } from '@mui/material';
import React, { memo, useContext } from 'react';
import { Handle, Position } from 'reactflow';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { CourseContext } from './PlanCourses.jsx'

const StyledLink = styled(Link)`
  text-decoration: none;
  text-transform: none;
  color: black;
  font-weight: 500;
`
const colors = {
  '1A': 'rgba(247, 37, 133, 0.4)',
  '1B': 'rgba(181, 23, 158, 0.4)',
  "2A": 'rgba(114, 9, 183, 0.4)',
  "2B": 'rgba(86, 11, 173, 0.4)',
  "3A": 'rgba(63, 55, 201, 0.4)',
  "3B": 'rgba(67, 97, 238, 0.4)',
  "4A": 'rgba(72, 149, 239, 0.4)',
  "4B": 'rgba(76, 201, 24, 0.4)'
}

export default memo(({ data, isConnectable, id}) => {

  const {deleteNode} = useContext(CourseContext);

  console.log(data)
  console.log(id)

  const handleDeleteNode = () => {
    deleteNode(id)
  }

  return (
    <div className="class-node-background">
      <div 
      className='class-node'
      style={{ background: colors[data.term]}}
    >
      <Handle
        type="target"
        position={Position.Left}
        style={{ background: '#555' }}
        onConnect={(params) => console.log('handle onConnect', params)}
        isConnectable={isConnectable}
      />
      <Stack>
      <StyledLink to={`/courses/${data.name.split(' ').join('_')}`} style={{ textDecoration: 'none' }}>
        <Typography
          variant='h6'  
        >
          {data.name} - {data.term}
        </Typography>
      </StyledLink>
      <Typography
        // variant='string'  
      >
        {data.description}
      </Typography>
      </Stack>
      <Button 
        variant="contained"
        color="error"
        size="small"
        onClick={handleDeleteNode}
      >
        Delete
      </Button>
      <Handle
        type="source"
        position={Position.Right}
        id="b"
        style={{ background: '#555' }}
        isConnectable={isConnectable}
      />
    </div>
    </div>
  );
});

