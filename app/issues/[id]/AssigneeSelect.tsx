'use client';

import React, { useState, useEffect } from 'react';
import { Select } from '@radix-ui/themes';
import { User } from '@prisma/client';
import axios from 'axios';

const AssigneeSelect = () => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    };
    fetchUsers();
  }, []);
  return (
    <Select.Root>
      <Select.Trigger placeholder='Assign to...' />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          {users.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
