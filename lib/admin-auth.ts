import { NextRequest, NextResponse } from "next/server";

export const ADMIN_COOKIE = "admin_session";

/** 요청 쿠키에서 관리자 세션을 검증합니다. */
export function isAdminAuthenticated(request: NextRequest): boolean {
  const cookie = request.cookies.get(ADMIN_COOKIE);
  return cookie?.value === "true";
}

/** 인증 실패 응답을 반환합니다. */
export function unauthorizedResponse(): NextResponse {
  return NextResponse.json({ error: "인증이 필요합니다." }, { status: 401 });
}
