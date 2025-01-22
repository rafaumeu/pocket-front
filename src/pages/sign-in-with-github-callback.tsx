import { Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import { Loader2 } from 'lucide-react'
import { useEffect } from 'react'
import { useAuthenticateFromGithub } from '../http/generated/api'
import Cookies from 'universal-cookie'

export function SignInWithGithubCallback() {
  const { mutateAsync: authenticateFromGithub } = useAuthenticateFromGithub()
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const navigate = useNavigate()
  console.log(code)
  if (!code) return <Navigate to="/" />

  useEffect(() => {
    authenticateFromGithub({ data: { code } }).then(response => {
      const token = response.token
      console.log(token)
      const cookies = new Cookies()
      cookies.set('in-orbit.token', token, {
        path: '/',
        maxAge: 60 * 60 * 24,
      })
      navigate('/app')
    })
  }, [code, authenticateFromGithub, navigate])
  return (
    <div className="h-screen flex items-center justify-center">
      <Loader2 className="size-6 text-zinc-500 animate-spin" />
    </div>
  )
}
