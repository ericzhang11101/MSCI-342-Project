import { Typography, Stack } from '@mui/material';
import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Link } from "react-router-dom";

type Term = "1A" | "1B" | "2A" | "2B" | "3A" | "3B" | "4A" | "4B";

type MemoProps = {
  data: {
    term: Term,
    name: String,
    description: String
  },
  isConnectable: boolean
}

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

export default memo(({ data, isConnectable }: MemoProps) => {
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
      <Stack
        direction={"row"}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Link to={`/courses/${data.name.split(' ').join('_')}`} style={{ textDecoration: 'none' }}>
          <Typography
            variant='h6'  
          >
            {data.name}
          </Typography>
        </Link>
        <Typography>
            {data.term}
          </Typography>
      </Stack>
      <Typography
        // variant='string'  
      >
        {data.description}
      </Typography>
      </Stack>
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

