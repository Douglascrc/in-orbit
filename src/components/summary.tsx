import { CheckCircle2, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { SheetTrigger } from './ui/sheet';
import { Progress } from './ui/progress';
import InOrbitIcon from './in-orbit-icon';
import { Separator } from './ui/separator';
import { getSummary } from '@/http/get-summary';
import { PendingGoals } from './pending-goals';
import { useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import ptBR from 'dayjs/locale/pt-BR';

dayjs.locale(ptBR);

export function Summary() {

  const {data} = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  if(!data) {
    return null;
  }
  // const goalsPerDay = data?.goalsPerDay || {};

  const firstDayOfWeek = dayjs().startOf('week').format('D MMM');

  const completedPercentage = Math.round(data?.completed * 100/ data?.total);

  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <InOrbitIcon />
        
          <span className="text-lg capitalize font-bold ">{firstDayOfWeek}</span>
        </div>
        <SheetTrigger asChild>
          <Button variant="primary" >
            <Plus className="size-4"/>
            Cadastrar meta
          </Button>
        </SheetTrigger>

      </div>

      <div className='flex flex-col gap-3'>
        <Progress style={{width:`${completedPercentage}`}}value={data?.total} />  
      </div>
        
      <div className='flex items-center justify-between text-xs text-zinc-400 gap-3'>
        <span>Você completou <span className='text-zinc-100'>{data?.completed}</span> de{' '}
          <span className='text-zinc-100'>{data?.total}</span> metas nesta semana
        </span>
      </div>
      <Separator orientation='horizontal'/>

      <PendingGoals/>

      <div className='flex flex-col gap-3'>
        <h2 className='text-xl font-medium'>Sua semana</h2>
       
        {Object.entries(data.goalsPerDay).map(([date,goals]) => {
          const weekDay = dayjs(date).format('dddd');
          const formatDate = dayjs(date).format('D [de] MMMM');

          return (
            <div key={date} className='flex flex-col gap-4'>
              <h3 className='font-medium'
              >{weekDay}{' '}
                <span className='text-zinc-400 text-xs'>({formatDate})</span>
              </h3>

              <ul className='flex flex-col gap-3'>
                {goals.map(goal => {
                  const time = dayjs(goal.completedAt).format('HH:mm');

                  return (
                    <li key={goal.id} className='flex items-center gap-2'>
                      <CheckCircle2 className='size-4 text-pink-500'/>
                      <span className='text-zinc-400'>Você completou {' '}
                        <span className='text-zinc-100'> {goal.title}</span> às{' '}
                        <span className='text-zinc-100'> {time}h </span>
                        <span className='underline text-sm'>{'Desfazer'}</span>
                      </span>
                    </li>
                  );
                })}       
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}