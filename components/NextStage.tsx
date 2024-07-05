import React from 'react'
import { Button } from './ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type NextStageProps = {
    label: string;
    nextStage: string;
}

const NextStage = ({label, nextStage} : NextStageProps) => {
  return (
    <Button type='button' className='bg-slate-700 hover:bg-slate-600' asChild>
        <Link href={nextStage} className='text-yellow-200 font-semibold text-lg mt-10 flex gap-2'>
          {label} <ArrowRight />
        </Link>
    </Button>
  )
}

export default NextStage