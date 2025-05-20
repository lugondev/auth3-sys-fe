import ProtectedWrapper from '@/components/auth/ProtectedWrapper'

export default function ProtectedLayout({children}: {children: React.ReactNode}) {
	return <ProtectedWrapper>{children}</ProtectedWrapper>
}
