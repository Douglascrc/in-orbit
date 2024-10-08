
import { Button } from './ui/button';
import { Input } from './ui/input';
import { SheetClose, SheetContent, SheetDescription, SheetHeader } from './ui/sheet';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

export function CreateGoal() {
  return(
    
    <><SheetContent>
      <div className='flex flex-col gap-6 h-full'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-between'>

            <SheetHeader>
              <h1 className='font-bold'>Cadastrar Meta</h1>
            </SheetHeader>
          </div>

          <SheetDescription>
            <p className='text-zinc-400'>Adicione atividades que te fazem bem e que você quer continuar praticando toda semana.</p>
          </SheetDescription>
        </div>

        <form action="" className='flex-1 flex flex-col justify-between'>
          <div className='flex flex-col gap-6'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='title'>Qual a atividade?</Label>
              <Input id='title' autoFocus placeholder='Correr 5km, meditar...' />
            </div>
            <div className='flex flex-col gap-5'>
              <Label htmlFor='times'>Quantas vezes por semana?</Label>
              <RadioGroup>
                <div className='flex items-center gap-2 bg-black justify-between py-2 px-2 rounded-xl hover:bg-purple-400/80 border-purple-500 border hover:border-white hover:border-2'>
                  <RadioGroupItem value="1" id="option-one" />
                  <span>1x na semana</span>
                  <span>🥱</span>
                </div>
                <div className='flex items-center gap-2 bg-black justify-between py-2 px-2 rounded-xl hover:bg-purple-400/80 border-purple-500 border hover:border-white hover:border-2'>
                  <RadioGroupItem value="2" id="option-two" />
                  <span>2x na semana</span>
                  <span>🙂</span>
                </div>
                <div className='flex items-center gap-2 bg-black justify-between py-2 px-2 rounded-xl hover:bg-purple-400/80 border-purple-500 border hover:border-white hover:border-2'>
                  <RadioGroupItem value="3" id="option-three" />
                  <span>3x na semana</span>
                  <span>😎</span>
                </div>
                <div className='flex items-center gap-2 bg-black justify-between py-2 px-2 rounded-xl hover:bg-purple-400/80 border-purple-500 border hover:border-white hover:border-2'>
                  <RadioGroupItem value="4" id="option-four" />
                  <span>4x na semana</span>
                  <span>😜</span>
                </div>
                <div className='flex items-center gap-2 bg-black justify-between py-2 px-2 rounded-xl hover:bg-purple-400/80 border-purple-500 border hover:border-white hover:border-2'>
                  <RadioGroupItem value="5" id="option-five" />
                  <span>5x na semana</span>
                  <span>🤨</span>
                </div>
                <div className='flex items-center gap-2 bg-black justify-between py-2 px-2 rounded-xl hover:bg-purple-400/80 border-purple-500 border hover:border-white hover:border-2'>
                  <RadioGroupItem value="6" id="option-six" />
                  <span className='text-zinc-388 text-sm font-medium leading-none'
                  >6x na semana</span>
                  <span>🤯</span>
                </div>
                <div className='flex items-center gap-2 bg-black justify-between py-2 px-2 rounded-xl hover:bg-purple-400/80 border-purple-500 border hover:border-white hover:border-2 '>
                  <RadioGroupItem value="6" id="option-six" />
                  <span className='text-zinc-388 text-sm font-medium leading-none'
                  >Todos os dias da semana</span>
                  <span>🔥</span>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div className='flex items-center gap-3 justify-between'>
            <SheetClose asChild>
              <Button className='flex-1' type='button' variant='default'>Fechar</Button>
            </SheetClose>
            <Button className='flex-1' variant='primary'>Salvar</Button>
          </div>
        </form>


      </div>
    </SheetContent></>
        
     
  );
}