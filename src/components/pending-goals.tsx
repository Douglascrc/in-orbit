import { Plus } from 'lucide-react';
import { Button } from './ui/button';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getPendingGoals } from '@/http/get-pending-goals';
import { createGoalCompletion } from '@/http/create-goal-completion';

export function PendingGoals() {
  const queryClient = useQueryClient();

  const {data} = useQuery({
    queryKey: ['pending-goals'],
    queryFn: getPendingGoals,
    staleTime: 1000 * 60,
  });

  if(!data) {
    return null;
  }

  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion(goalId);

    queryClient.invalidateQueries({queryKey:['summary']});
    queryClient.invalidateQueries({queryKey:['pending-goals']});
  }

  return(
    <div className='flex flex-wrap gap-3'>
      {data.map(goal => {
        return(
          <Button key={goal.id} variant= 'outline' disabled={goal.completionsCount >= goal.weeklyFrequence}
            onClick={() => handleCompleteGoal(goal.id)}>
            <Plus className="size-4"/>
            {goal.title}
          </Button>
        );
      })}
    </div>
  );
}