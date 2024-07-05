'use client';

import NextStage from '@/components/NextStage';
import UserCard from '@/components/UserCard'
import { Button } from '@/components/ui/button';
import { getUsersWithPagination } from '@/fetchUtils/users'
import { cn } from '@/lib/utils';
import { User } from '@/types/user';
import React, { useEffect, useState } from 'react'

const StageThree = () => {

  const [perPage, setPerPage] = useState<number>(3);
  const [users, setUsers] = useState<User[]>([]);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const handleMoreUsers = () => {
    setPerPage((prev) => prev + 3);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getUsersWithPagination(1, perPage);
      const fetchedUsers = response.data;
      setUsers(fetchedUsers);
    };
  
    fetchUsers();
    if(perPage >= 12) {
      setHasMore(false);
    } 
  }, [perPage]);

  return (
    <section className='h-full py-10  flex flex-col justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10'>
        {users.map((user : User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      {hasMore ? (
        <Button 
          onClick={handleMoreUsers}
          className='bg-slate-600 hover:bg-slate-500'
        >
          See more
        </Button>
       ) : ( 
        <Button 
          onClick={handleMoreUsers}
          className='opacity-50'
          disabled
        >
          No data
        </Button>
       )}
      <NextStage  label='Home' nextStage='/' />
    </section>
  )
}

export default StageThree