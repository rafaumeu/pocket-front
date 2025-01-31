interface createGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}
export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: createGoalRequest) {
  await fetch('http://localhost:3000/goals', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, desiredWeeklyFrequency }),
  })
}
