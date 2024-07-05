import NextStage from '@/components/NextStage'
import UserCard from '@/components/UserCard'
import { getUser } from '@/fetchUtils/users'

const StageOne = async () => {

  const user = await getUser(1)

  return (
    <section className='h-screen flex flex-col justify-center items-center'>
        <UserCard user={user.data} />
        <NextStage label='Stage 2' nextStage='/stage-2' />
    </section>
  )
}

export default StageOne