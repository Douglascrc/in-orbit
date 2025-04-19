import { eq } from 'drizzle-orm';
import { db } from '../db';
import { goalCompletions, goals } from '../db/schema';

interface DeleteGoalRequest {
  goalId: string
}

export async function deleteGoal({ goalId }: DeleteGoalRequest) {
  // Deletar as conclusões associadas à meta
  await db.delete(goalCompletions).where(eq(goalCompletions.goalId,goalId));

  await db.delete(goals).where(eq(goals.id, goalId));
    
}