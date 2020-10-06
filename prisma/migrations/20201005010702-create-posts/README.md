# Migration `20201005010702-create-posts`

This migration has been generated by Rodrigo Avellar at 10/4/2020, 10:07:02 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Post" (
"id" SERIAL,
"title" text   NOT NULL ,
"userId" integer   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Post" ADD FOREIGN KEY ("userId")REFERENCES "public"."User"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201005005439..20201005010702-create-posts
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider = "prisma-client-js"
@@ -10,5 +10,13 @@
 model User {
   id    Int     @id @default(autoincrement())
   name  String?
   email String  @unique
+  posts Post[]
 }
+
+model Post {
+  id     Int    @id @default(autoincrement())
+  title  String
+  author User   @relation(fields: [userId], references: [id])
+  userId Int
+}
```

