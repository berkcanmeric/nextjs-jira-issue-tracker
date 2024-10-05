import { Box } from '@radix-ui/themes';
import React from 'react';
import { Skeleton } from '@/app/components';

const IssueFormSkeleton = () => {
  return (
    <Box className='max-w-xl'>
      <Skeleton />
      <Skeleton height='20rem' />
      <Skeleton width='2rem' />
    </Box>
  );
};

export default IssueFormSkeleton;
