import {pgTable, serial, text, timestamp} from "drizzle-orm/pg-core";


export const $notes = pgTable('notes', {
    id: serial("id").primaryKey(),
    name: text("Name").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    imageUrl: text("imageUrl").notNull(),
    userId: text("userId").notNull(),
    editorState: text("editor_state").notNull(),

})

export type NoteType = typeof $notes.$inferInsert