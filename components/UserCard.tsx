import React from 'react'
import { Card, CardContent } from './ui/card'
import { User } from '@/types/user'
import Image from 'next/image'
import Link from 'next/link'

type UserCardProps = {
    user: User
}

const UserCard = ({user} : UserCardProps) => {
  return (
    <Card className='w-96 h-80 flex items-center justify-center bg-slate-400 hover:-translate-y-3 transition-all'>
        <CardContent className='flex flex-col justify-center items-center gap-3 font-semibold'>
            <Image 
                src={user.avatar} 
                alt='avatar image' 
                width={100} 
                height={100} 
                className='rounded-full'
            />
            <p># {user.id}</p>
            <p className='text-xl'>{user.last_name}, {user.first_name}</p>
            <Link href={`mailto:${user.email}`}>{user.email}</Link>
        </CardContent>
    </Card>
  )
}

export default UserCard