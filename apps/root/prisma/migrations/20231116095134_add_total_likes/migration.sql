-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Song" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isVisible" BOOLEAN NOT NULL,
    "iconId" INTEGER,
    "totalLikes" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "Song_iconId_fkey" FOREIGN KEY ("iconId") REFERENCES "File" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Song" ("artist", "createdAt", "iconId", "id", "isVisible", "title") SELECT "artist", "createdAt", "iconId", "id", "isVisible", "title" FROM "Song";
DROP TABLE "Song";
ALTER TABLE "new_Song" RENAME TO "Song";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
