import { useQuery } from '@tanstack/react-query'
import { getSummary } from '../http/get-summary'
import { Dialog } from '../components/ui/dialog'
import { CreateGoal } from '../components/create-goal'
import { WeeklySummary } from '../components/summary'
import { EmptyGoals } from '../components/empty-goals'
import { Loader2 } from 'lucide-react'

export function Application() {
  const { data, isLoading } = useQuery({
    queryKey: ['summary'],
    queryFn: getSummary,
    staleTime: 1000 * 60 * 10,
  })
  if (isLoading || !data) {
    return (
      <div className="h-screen flex items-center justify-center">
        <Loader2 className="text-zinc-500 animate-spin size-10" />
      </div>
    )
  }
  return (
    <Dialog>
      {data && data.summary.total > 0 ? (
        <WeeklySummary summary={data.summary} />
      ) : (
        <EmptyGoals />
      )}
      <CreateGoal />
    </Dialog>
  )
}
