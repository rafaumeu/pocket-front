import { Plus } from 'lucide-react'
import { OutlineButton } from './ui/outline-button'
import {
  getGetPendingGoalsQueryKey,
  getGetWeekSummaryQueryKey,
  useCreateCompletion,
  useGetPendingGoals,
} from '../http/generated/api'
import { useQueryClient } from '@tanstack/react-query'

export function PendingGoals() {
  const queryClient = useQueryClient()
  const { data, isLoading } = useGetPendingGoals()
  const { mutateAsync: createGoalCompletion } = useCreateCompletion()
  if (isLoading || !data) return null
  async function handleCompleteGoal(goalId: string) {
    await createGoalCompletion({ data: { goalId } })
    queryClient.invalidateQueries({ queryKey: getGetPendingGoalsQueryKey() })
    queryClient.invalidateQueries({ queryKey: getGetWeekSummaryQueryKey() })
  }
  return (
    <div className="flex flex-wrap gap-3">
      {data.pendingGoals.map(goal => {
        return (
          <OutlineButton
            key={goal.id}
            disabled={goal.completionCount > goal.desiredWeeklyFrequency}
            onClick={() => handleCompleteGoal(goal.id)}
          >
            <Plus className="size-4 text-zinc400" />
            {goal.title}
          </OutlineButton>
        )
      })}
    </div>
  )
}
