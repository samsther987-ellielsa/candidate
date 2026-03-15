"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        sessionStorage.setItem("isAdmin", "true");
        router.push("/admin/gallery");
      } else {
        const data = await res.json();
        setError(data.error ?? "비밀번호가 올바르지 않습니다.");
        setPassword("");
      }
    } catch {
      setError("서버 연결에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "var(--color-bg-subtle)" }}
    >
      <div className="w-full max-w-sm">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            🔐
          </div>
          <h1 className="text-2xl font-bold" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
            관리자 로그인
          </h1>
          <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
            홍길동 후보 선거사무소
          </p>
        </div>

        {/* 로그인 폼 */}
        <div className="rounded-3xl border bg-white p-8 shadow-sm" style={{ borderColor: "var(--color-border)" }}>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>
                관리자 비밀번호
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => { setPassword(e.target.value); setError(""); }}
                placeholder="비밀번호를 입력하세요"
                autoFocus
                className="w-full rounded-xl border px-4 py-3 text-base outline-none transition-shadow focus:shadow-md min-h-[48px]"
                style={{ borderColor: error ? "#ef4444" : "var(--color-border)" }}
              />
              {error && (
                <p className="text-sm mt-1.5 text-red-500">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={!password || loading}
              className="w-full rounded-xl py-3 text-base font-bold text-white min-h-[48px] transition-opacity disabled:opacity-40 hover:opacity-90"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              {loading ? "확인 중..." : "로그인"}
            </button>
          </form>
        </div>

        <p className="text-center text-xs mt-4" style={{ color: "var(--color-text-muted)" }}>
          ⚠️ 관리자 전용 페이지입니다
        </p>
      </div>
    </div>
  );
}
