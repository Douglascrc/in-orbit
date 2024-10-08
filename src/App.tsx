import { CreateGoal } from './components/create-goal';
import { Sheet } from './components/ui/sheet';
import { EmptyGoals } from './components/empty-goals';
import { Summary } from './components/summary';

export function App() {
  

  return (
    <Sheet>
      <EmptyGoals />
      <Summary />
      <CreateGoal />
    </Sheet>
  );
}

export default App;
