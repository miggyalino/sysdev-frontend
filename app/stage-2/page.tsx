import NextStage from '@/components/NextStage';
import UserCard from '@/components/UserCard'
import { getUsers } from '@/fetchUtils/users'
import { User } from '@/types/user';
import React from 'react'

const StageTwo = async () => {
  const fetchUsers = await getUsers();
  const users = fetchUsers.data

  return (
    <section className='h-screen flex flex-col justify-center items-center'>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {users && users.map((user : User) => (
          <UserCard key={user.id} user={user} />
        ))}
       
      </div>
      <NextStage label='Stage 3' nextStage='/stage-3' />
    </section>
  )
}

export default StageTwo