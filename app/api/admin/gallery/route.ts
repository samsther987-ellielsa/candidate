import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import { DEFAULT_GALLERY_ITEMS, type GalleryItem } from "@/lib/gallery-data";
import { isAdminAuthenticated, unauthorizedResponse } from "@/lib/admin-auth";

const DATA_PATH = path.join(process.cwd(), "data", "gallery.json");

async function readGallery(): Promise<GalleryItem[]> {
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return DEFAULT_GALLERY_ITEMS;
  }
}

async function writeGallery(items: GalleryItem[]) {
  await mkdir(path.join(process.cwd(), "data"), { recursive: true });
  await writeFile(DATA_PATH, JSON.stringify(items, null, 2), "utf-8");
}

// GET: 전체 갤러리 조회
export async function GET() {
  const items = await readGallery();
  return NextResponse.json(items);
}

// POST: 새 항목 추가
export async function POST(request: NextRequest) {
  if (!isAdminAuthenticated(request)) return unauthorizedResponse();
  try {
    const body = await request.json();
    const items = await readGallery();

    const newItem: GalleryItem = {
      id: Date.now().toString(),
      label: body.label || "새 사진",
      desc: body.desc || "",
      gradient: body.gradient || "linear-gradient(135deg, #1e3a5f 0%, #2e6aa8 100%)",
      icon: body.icon || "📷",
      imagePath: body.imagePath,
    };

    items.push(newItem);
    await writeGallery(items);
    return NextResponse.json(newItem);
  } catch {
    return NextResponse.json({ error: "추가에 실패했습니다." }, { status: 500 });
  }
}

// DELETE: 항목 삭제
export async function DELETE(request: NextRequest) {
  if (!isAdminAuthenticated(request)) return unauthorizedResponse();
  try {
    const { id } = await request.json();
    const items = await readGallery();
    const filtered = items.filter((item) => item.id !== id);
    await writeGallery(filtered);
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "삭제에 실패했습니다." }, { status: 500 });
  }
}

// PUT: 항목 수정
export async function PUT(request: NextRequest) {
  if (!isAdminAuthenticated(request)) return unauthorizedResponse();
  try {
    const body = await request.json();
    const items = await readGallery();
    const idx = items.findIndex((item) => item.id === body.id);
    if (idx === -1) return NextResponse.json({ error: "항목 없음" }, { status: 404 });
    items[idx] = { ...items[idx], ...body };
    await writeGallery(items);
    return NextResponse.json(items[idx]);
  } catch {
    return NextResponse.json({ error: "수정에 실패했습니다." }, { status: 500 });
  }
}
