type PendingGoalsResponse = {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}[]
export async function GetPendingGoals(): Promise<PendingGoalsResponse> {
  const response = await fetch('http://localhost:3000/pending-goals')
  const data = await response.json()
  return data.pendingGoals
}
