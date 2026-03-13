"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type { GalleryItem } from "@/lib/gallery-data";

export default function AdminGalleryPage() {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [items, setItems] = useState<GalleryItem[]>([]);
  const [loading, setLoading] = useState(true);

  // 업로드 폼 상태
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [label, setLabel] = useState("");
  const [desc, setDesc] = useState("");
  const [uploadMsg, setUploadMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // 삭제 확인
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // 관리자 인증 확인
  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") !== "true") {
      router.replace("/admin");
      return;
    }
    fetchGallery();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchGallery = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/gallery");
      const data = await res.json();
      setItems(data);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadFile(file);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    if (!label) setLabel(file.name.replace(/\.[^.]+$/, ""));
  };

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadFile) return;
    setUploading(true);
    setUploadMsg(null);

    try {
      // 1. 파일 업로드
      const formData = new FormData();
      formData.append("file", uploadFile);
      const uploadRes = await fetch("/api/admin/upload", { method: "POST", body: formData });
      const uploadData = await uploadRes.json();

      if (!uploadRes.ok) throw new Error(uploadData.error);

      // 2. 갤러리 항목 추가
      const addRes = await fetch("/api/admin/gallery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          label: label || "새 사진",
          desc: desc || new Date().toLocaleDateString("ko-KR"),
          imagePath: uploadData.imagePath,
        }),
      });

      if (!addRes.ok) throw new Error("항목 추가 실패");

      setUploadMsg({ type: "success", text: "사진이 업로드되었습니다!" });
      setLabel("");
      setDesc("");
      setUploadFile(null);
      setPreviewUrl(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      await fetchGallery();
    } catch (err: unknown) {
      setUploadMsg({ type: "error", text: err instanceof Error ? err.message : "업로드 실패" });
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch("/api/admin/gallery", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      setDeletingId(null);
      await fetchGallery();
    } catch {
      alert("삭제에 실패했습니다.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("isAdmin");
    router.replace("/admin");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--color-bg-subtle)" }}>
      {/* 관리자 헤더 */}
      <header
        className="sticky top-0 z-40 border-b px-4 py-3 flex items-center justify-between"
        style={{ backgroundColor: "var(--color-primary)", borderColor: "var(--color-primary-dark)" }}
      >
        <div className="flex items-center gap-3">
          <span className="text-white font-bold" style={{ fontFamily: "Noto Serif KR, serif" }}>관리자</span>
          <span className="text-white/40">|</span>
          <span className="text-white/80 text-sm">갤러리 관리</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="/" target="_blank" className="text-white/70 text-sm hover:text-white transition-colors">
            사이트 보기 ↗
          </a>
          <button
            onClick={handleLogout}
            className="rounded-lg px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.3)" }}
          >
            로그아웃
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-10 space-y-10">

        {/* 사진 업로드 */}
        <section className="rounded-3xl border bg-white p-8" style={{ borderColor: "var(--color-border)" }}>
          <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
            📤 사진 업로드
          </h2>
          <form onSubmit={handleUpload} className="space-y-5">
            {/* 파일 선택 */}
            <div
              className="relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer hover:bg-gray-50 transition-colors"
              style={{ borderColor: previewUrl ? "var(--color-primary)" : "var(--color-border)" }}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              {previewUrl ? (
                <div className="relative w-full aspect-video rounded-xl overflow-hidden">
                  <Image src={previewUrl} alt="미리보기" fill className="object-cover" />
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="text-4xl">🖼️</div>
                  <p className="text-base font-semibold" style={{ color: "var(--color-primary)" }}>
                    클릭하여 사진 선택
                  </p>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                    JPG, PNG, WEBP 지원
                  </p>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text)" }}>
                  사진 제목 *
                </label>
                <input
                  type="text"
                  value={label}
                  onChange={(e) => setLabel(e.target.value)}
                  placeholder="예: 지역 주민 간담회"
                  required
                  className="w-full rounded-xl border px-4 py-3 text-base outline-none min-h-[48px]"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1.5" style={{ color: "var(--color-text)" }}>
                  날짜 / 장소
                </label>
                <input
                  type="text"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="예: 2025.06 · 서산 시민회관"
                  className="w-full rounded-xl border px-4 py-3 text-base outline-none min-h-[48px]"
                  style={{ borderColor: "var(--color-border)" }}
                />
              </div>
            </div>

            {uploadMsg && (
              <div
                className="rounded-xl px-4 py-3 text-sm font-medium"
                style={{
                  backgroundColor: uploadMsg.type === "success" ? "#dcfce7" : "#fee2e2",
                  color: uploadMsg.type === "success" ? "#166534" : "#991b1b",
                }}
              >
                {uploadMsg.type === "success" ? "✅ " : "❌ "}{uploadMsg.text}
              </div>
            )}

            <button
              type="submit"
              disabled={!uploadFile || !label || uploading}
              className="w-full rounded-xl py-3 text-base font-bold text-white min-h-[52px] disabled:opacity-40 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              {uploading ? "업로드 중..." : "업로드"}
            </button>
          </form>
        </section>

        {/* 갤러리 목록 */}
        <section className="rounded-3xl border bg-white p-8" style={{ borderColor: "var(--color-border)" }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold" style={{ fontFamily: "Noto Serif KR, serif", color: "var(--color-primary)" }}>
              🖼️ 갤러리 목록
            </h2>
            <span
              className="text-sm font-semibold px-3 py-1 rounded-full"
              style={{ backgroundColor: "var(--color-bg-subtle)", color: "var(--color-text-muted)" }}
            >
              총 {items.length}개
            </span>
          </div>

          {loading ? (
            <div className="text-center py-12 text-gray-400">불러오는 중...</div>
          ) : items.length === 0 ? (
            <div className="text-center py-12" style={{ color: "var(--color-text-muted)" }}>
              등록된 사진이 없습니다.
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border overflow-hidden"
                  style={{ borderColor: "var(--color-border)" }}
                >
                  {/* 썸네일 */}
                  <div
                    className="relative aspect-[4/3] flex items-center justify-center"
                    style={{ background: item.imagePath ? undefined : item.gradient }}
                  >
                    {item.imagePath ? (
                      <Image src={item.imagePath} alt={item.label} fill className="object-cover" />
                    ) : (
                      <span className="text-4xl">{item.icon}</span>
                    )}
                  </div>

                  {/* 정보 + 삭제 */}
                  <div className="p-4">
                    <p className="font-semibold text-sm mb-0.5" style={{ color: "var(--color-text)" }}>
                      {item.label}
                    </p>
                    <p className="text-xs mb-3" style={{ color: "var(--color-text-muted)" }}>
                      {item.desc}
                    </p>

                    {deletingId === item.id ? (
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleDelete(item.id)}
                          className="flex-1 rounded-lg py-2 text-xs font-bold text-white bg-red-500 hover:bg-red-600 transition-colors"
                        >
                          삭제 확인
                        </button>
                        <button
                          onClick={() => setDeletingId(null)}
                          className="flex-1 rounded-lg py-2 text-xs font-semibold transition-colors hover:bg-gray-100"
                          style={{ border: "1px solid var(--color-border)", color: "var(--color-text-muted)" }}
                        >
                          취소
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => setDeletingId(item.id)}
                        className="w-full rounded-lg py-2 text-xs font-semibold text-red-500 hover:bg-red-50 transition-colors"
                        style={{ border: "1px solid #fecaca" }}
                      >
                        삭제
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
