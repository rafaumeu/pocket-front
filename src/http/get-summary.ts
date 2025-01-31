type SummaryResponse = {
  complete: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}
export async function GetSummary(): Promise<SummaryResponse> {
  const response = await fetch('http://localhost:3000/summary')
  const data = await response.json()
  return data.summary
}
