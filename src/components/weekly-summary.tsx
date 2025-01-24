import { CheckCircle2, Plus, ArrowLeft, ArrowRight } from 'lucide-react'
import { InOrbitIcon } from './in-orbit-icon'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { Button } from './ui/button'
import { Progress, ProgressIndicator } from './ui/progress-bar'
import { Separator } from './ui/separator'
import dayjs from 'dayjs'
import ptBR from 'dayjs/locale/pt-br'
import { PendingGoals } from './pending-goals'
import type { GetWeekSummary200Summary } from '../http/generated/api'
import { UserProfile } from './user-profile'
import { UserLevel } from './user-level'
import { useSearchParams } from 'react-router-dom'

dayjs.locale(ptBR)

interface WeeklySummaryProps {
  summary: GetWeekSummary200Summary
}

export function WeeklySummary({ summary }: WeeklySummaryProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const weekStartsAtParam = searchParams.get('week_starts_at')
  const weekStartsAt = weekStartsAtParam
    ? new Date(weekStartsAtParam)
    : new Date()

  const fromDate = dayjs(weekStartsAt).startOf('week').format('D[ de ]MMM')
  const toDate = dayjs(weekStartsAt).endOf('week').format('D[ de ]MMM')

  const completedPercentage = summary.total
    ? Math.round((summary.completed * 100) / summary.total)
    : 0
  function handlePreviousWeek() {
    const params = new URLSearchParams(searchParams)
    params.set(
      'week_starts_at',
      dayjs(weekStartsAt).subtract(7, 'days').toISOString()
    )
    setSearchParams(params)
  }
  function handleNextWeek() {
    const params = new URLSearchParams(searchParams)
    params.set(
      'week_starts_at',
      dayjs(weekStartsAt).add(7, 'days').toISOString()
    )
    setSearchParams(params)
  }
  const isCurrentWeek = dayjs(weekStartsAtParam)
    .endOf('week')
    .isAfter(new Date())

  return (
    <main className="max-w-[600px] py-10 px-5 mx-auto flex flex-col gap-6">
      <div className="bg-zinc-900 rounded-xl px-4 py-3 shadow-shape flex items-center justify-between ">
        <UserProfile />
        <UserLevel />
      </div>
      <div className="px-5 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <InOrbitIcon />
            <span className="text-lg font-semibold">
              {fromDate} - {toDate}
            </span>
            <div className="flex items-center gap-2">
              <Button
                onClick={handlePreviousWeek}
                size="icon"
                variant="secondary"
                disabled={!isCurrentWeek}
              >
                <ArrowLeft className="size-4" />
              </Button>
              <Button
                disabled={isCurrentWeek}
                onClick={handleNextWeek}
                size="icon"
                variant="secondary"
              >
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </div>

          <DialogTrigger asChild>
            <Button size="sm">
              <Plus className="size-4" />
              Cadastrar meta
            </Button>
          </DialogTrigger>
        </div>

        <div className="flex flex-col gap-3">
          <Progress value={summary.completed} max={summary.total ?? 1}>
            <ProgressIndicator style={{ width: `${completedPercentage}%` }} />
          </Progress>

          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span>
              Você completou{' '}
              <span className="text-zinc-100">{summary.completed}</span> de{' '}
              <span className="text-zinc-100">{summary.total}</span> metas nessa
              semana.
            </span>
            <span>{completedPercentage}%</span>
          </div>
        </div>

        <Separator />

        {isCurrentWeek && <PendingGoals />}

        <div className="space-y-6">
          <h2 className="text-xl font-medium">Sua semana</h2>

          {summary.goalsPerDay &&
            Object.entries(summary.goalsPerDay).map(([date, goals]) => {
              const weekDay = dayjs(date).format('dddd')
              const parsedDate = dayjs(date).format('D[ de ]MMM')

              return (
                <div className="space-y-4" key={date}>
                  <h3 className="font-medium capitalize">
                    {weekDay}{' '}
                    <span className="text-zinc-400 text-xs">
                      ({parsedDate})
                    </span>
                  </h3>

                  <ul className="space-y-3">
                    {goals.map(goal => {
                      const parsedTime = dayjs(goal.completedAt).format(
                        'HH:mm[h]'
                      )

                      return (
                        <li className="flex items-center gap-2" key={goal.id}>
                          <CheckCircle2 className="size-4 text-pink-500" />
                          <span className="text-sm text-zinc-400">
                            Você completou "
                            <span className="text-zinc-100">{goal.title}</span>"
                            às{' '}
                            <span className="text-zinc-100">{parsedTime}</span>
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )
            })}
        </div>
      </div>
    </main>
  )
}
