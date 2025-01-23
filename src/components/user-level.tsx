import { useGetUserExperienceAndLevel } from '../http/generated/api'
import { Progress, ProgressIndicator } from './ui/progress-bar'

export function UserLevel() {
  const { data } = useGetUserExperienceAndLevel()
  if (!data) return null
  const percentage = Math.round(
    (data.profile.experience * 100) / data.profile.experienceToNextLevel
  )
  return (
    <div className="max-w-[220px] w-full flex flex-col gap-1">
      <div className="flex w-full items-center px-2 justify-between text-xxs text-zinc-200">
        <span>Lvl {data.profile.level}</span>
        <span className="text-zinc-400">
          {data.profile.experience}xp de {data.profile.experienceToNextLevel}xp
        </span>
        <span>{percentage}%</span>
      </div>
      <Progress
        className="bg-zinc-800"
        value={data.profile.experience}
        max={data.profile.experienceToNextLevel}
      >
        <ProgressIndicator
          style={{
            width: `${percentage}%`,
          }}
        />
      </Progress>
    </div>
  )
}
