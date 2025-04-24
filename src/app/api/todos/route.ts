import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 전체 조회
export async function GET() {
    // todo는 테이블 명, findMany는 다 가져오는 거
    const todos = await prisma.todo.findMany({ orderBy: { id: 'desc' } });
    return NextResponse.json(todos);
}

// 추가 req는 json으로 넘어오니까 NextRequest 타입으로 선언
export async function POST(req: NextRequest) {
    const { text , completed} = await req.json();

    const todo = await prisma.todo.create({
    data: { text, completed },
    });

    return NextResponse.json(todo, { status: 201 });
}

