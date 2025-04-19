import { CreateGoal } from './components/create-goal';
import { Sheet } from './components/ui/sheet';
import { EmptyGoals } from './components/empty-goals';
import { Summary } from './components/summary';
import { useQuery } from '@tanstack/react-query';
import { getSummary } from './http/get-summary';

export function App() {
  
  const {data} = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60,
  });

  return (
    <Sheet>
      {data && data.total > 0 ? <Summary /> : <EmptyGoals />}
      <CreateGoal />
    </Sheet>
  );
}

export default App;
