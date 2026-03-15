import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "submissions.json");

type Submission = {
  id: string;
  type: "cheer" | "volunteer" | "newsletter" | "contact";
  submittedAt: string;
  [key: string]: unknown;
};

async function readSubmissions(): Promise<Submission[]> {
  try {
    const raw = await readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeSubmissions(items: Submission[]) {
  await mkdir(path.join(process.cwd(), "data"), { recursive: true });
  await writeFile(DATA_PATH, JSON.stringify(items, null, 2), "utf-8");
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, ...fields } = body;

    if (!["cheer", "volunteer", "newsletter", "contact"].includes(type)) {
      return NextResponse.json({ error: "잘못된 폼 유형입니다." }, { status: 400 });
    }

    const submissions = await readSubmissions();
    const newEntry: Submission = {
      id: Date.now().toString(),
      type,
      submittedAt: new Date().toISOString(),
      ...fields,
    };

    submissions.push(newEntry);
    await writeSubmissions(submissions);

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "제출에 실패했습니다." }, { status: 500 });
  }
}
