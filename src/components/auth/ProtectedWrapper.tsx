'use client'
import {useAuth} from '@/contexts/AuthContext'
import {useRouter, usePathname} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function ProtectedWrapper({children}: {children: React.ReactNode}) {
	const {user, loading, isAuthenticated} = useAuth()
	const router = useRouter()
	const pathname = usePathname()
	const [isCheckingAuth, setIsCheckingAuth] = useState(true)

	useEffect(() => {
		if (loading) {
			setIsCheckingAuth(true)
			return
		}

		if (!isAuthenticated || !user) {
			setIsCheckingAuth(false)
			if (pathname !== '/login' && pathname !== '/') {
				router.push('/login?redirect=' + encodeURIComponent(pathname))
			}
			return
		}

		setIsCheckingAuth(false)
	}, [user, loading, isAuthenticated, router, pathname])

	if (isCheckingAuth) {
		return (
			<div className='flex h-screen items-center justify-center'>
				<div className='animate-pulse space-y-4'>
					<div className='h-4 w-[200px] rounded bg-muted'></div>
					<div className='h-4 w-[160px] rounded bg-muted'></div>
				</div>
			</div>
		)
	}

	if (!isAuthenticated && !loading) {
		return null
	}

	return <>{children}</>
}
