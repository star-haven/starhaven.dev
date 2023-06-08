import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    username: varchar("username", { length: 32 }),
    avatarUrl: text("avatar_url"),
    discordId: text("discord_id"),
});
