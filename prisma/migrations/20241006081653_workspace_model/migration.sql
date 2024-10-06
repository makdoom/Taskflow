-- CreateTable
CREATE TABLE "Workspace" (
    "id" TEXT NOT NULL,
    "workspaceName" TEXT NOT NULL,
    "website" TEXT,
    "description" TEXT,
    "gradientId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Workspace_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Workspace" ADD CONSTRAINT "Workspace_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
