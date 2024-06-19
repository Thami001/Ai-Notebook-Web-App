// /api/createNoteBook

import { db } from "@/lib/db";
import { $notes } from "@/lib/db/schema";
import { generateImage, generateImagePrompt } from "@/lib/openai";
import { NextResponse } from "next/server";
import {auth} from "@clerk/nextjs/server";

export const runtime = "edge";

export async function POST(req: Request) {
    const { userId } = auth();
    if (!userId) {
        return new NextResponse("unauthorised", { status: 401 });
    }
    const body = await req.json();
    const { name } = body;
    const image_description = await generateImagePrompt(name);
    if (!image_description) {
        return new NextResponse("failed to generate image description", {
            status: 500,
        });
    }
    const image_url = await generateImage(image_description);
    if (!image_url) {
        return new NextResponse("failed to generate image ", {
            status: 500,
        });
    }

    const note_id = await db
        .insert($notes)
        .values({
            name,
            userId,
            imageUrl: image_url,
        })
        .returning({
            insertedId: $notes.id,
        });

    return NextResponse.json({
        note_id: note_id[0].insertedId,
    });
}

 /*Something is still broken here */

