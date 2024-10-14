interface CreateGoalRequest {
  title:string,
  weeklyFrequency:number,
}

export async function createGoal({title, weeklyFrequency}:CreateGoalRequest ){
  await fetch('http:localhost:3333/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      weeklyFrequency
    })
  });
 
}