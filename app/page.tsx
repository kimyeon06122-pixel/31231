import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
        <p className="mt-2 text-muted-foreground">
          Supabase 인증 시스템이 구현되었습니다
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/auth/login">로그인</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/auth/sign-up">회원가입</Link>
        </Button>
      </div>
    </main>
  )
}
