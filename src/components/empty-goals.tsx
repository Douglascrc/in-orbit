import logo from '../assets/logo.svg';
import letsStart from '../assets/lets-start.svg';
import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { SheetTrigger } from './ui/sheet';

export function EmptyGoals() {
  return(
    <div className='h-screen flex flex-col items-center justify-center gap-8'>
      <img src={logo} alt="in.orbit" className="w-9 h-9" />
      <img src={letsStart} alt="Lets-Start in.orbit" className='w-80 h-80' />
      <p className='text-zinc-300 leading-relaxed max-w-80 text-center'>
        Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora mesmo?
      </p>

      <SheetTrigger asChild>
        <Button variant='primary'>
          <Plus className='size-4' /> Cadastrar Meta
        </Button>
      </SheetTrigger>
    </div>
  );
}