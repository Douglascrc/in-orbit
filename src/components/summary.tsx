import { CheckCircle2, Plus } from 'lucide-react';
import { Button } from './ui/button';
import { SheetTrigger } from './ui/sheet';
import { Progress } from './ui/progress';
import InOrbitIcon from './in-orbit-icon';
import { Separator } from './ui/separator';

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className='flex items-center gap-3'>
          <InOrbitIcon />
        </div>
        <span className="t">5 a 10 de Agosto</span>

        <SheetTrigger asChild>
          <Button variant="primary" >
            <Plus className="size-4"/>
            Cadastrar meta
          </Button>
        </SheetTrigger>

      </div>

      <div className='flex flex-col gap-3'>
        <Progress value={79} />  
      </div>
        
      <div className='flex items-center justify-between text-xs text-zinc-400 gap-3'>
        <span>Você completou <span className='text-zinc-100'>8</span> de{' '}
          <span className='text-zinc-100'>15</span> metas nesta semana
        </span>
      </div>
      <Separator orientation='horizontal'/>

      <div className='flex flex-wrap gap-3'>
        <Button variant= 'outline'>
          <Plus className="size-4"/>
          Meta 1
        </Button>
        <Button variant= 'outline'>
          <Plus className="size-4"/>
          Meta 2
        </Button>
        <Button variant= 'outline'>
          <Plus className="size-4"/>
          Meta 3
        </Button>
        <Button variant= 'outline'>
          <Plus className="size-4"/>
          Meta 4
        </Button>
      </div>

      <div className='flex flex-col gap-3'>
        <h2 className='text-xl font-medium'>Sua semana</h2>
       
        <div className='flex flex-col gap-4'>
          <h3 className='font-medium'
          >Domingo {' '}
            <span className='text-zinc-400 text-xs'>(13 de Outubro)</span>
          </h3>
          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'>
              <CheckCircle2 className='size-4 text-pink-500'/>
              <span className='text-zinc-400'>Você completou 
                <span className='text-zinc-100'> "Meta 1"</span> às{' '}
                <span className='text-zinc-100'> 13:00 </span>
                <span className='underline text-sm'>{'Desfazer'}</span>
              </span>
            </li>

            <li className='flex items-center gap-2'>
              <CheckCircle2 className='size-4 text-pink-500'/>
              <span className='text-zinc-400'>Você completou 
                <span className='text-zinc-100'> "Meta 2"</span> às{' '}
                <span className='text-zinc-100'> 15:00 </span>
                <span className='underline text-sm'>{'Desfazer'}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-4'>
          <h3 className='font-medium'
          >Segunda {' '}
            <span className='text-zinc-400 text-xs'>(14 de Outubro)</span>
          </h3>
          <ul className='flex flex-col gap-3'>
            <li className='flex items-center gap-2'>
              <CheckCircle2 className='size-4 text-pink-500'/>
              <span className='text-zinc-400'>Você completou 
                <span className='text-zinc-100'> "Meta 5"</span> às{' '}
                <span className='text-zinc-100'> 19:00 </span>
                <span className='underline text-sm'>{'Desfazer'}</span>
              </span>
            </li>

            <li className='flex items-center gap-2'>
              <CheckCircle2 className='size-4 text-pink-500'/>
              <span className='text-zinc-400'>Você completou 
                <span className='text-zinc-100'> "Meta 4"</span> às{' '}
                <span className='text-zinc-100'> 10:00 </span>
                <span className='underline text-sm'>{'Desfazer'}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}