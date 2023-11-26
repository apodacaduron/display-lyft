import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, privateProcedure } from "~/server/api/trpc";

export const storeRouter = createTRPCRouter({
  create: privateProcedure
    .input(z.object({ name: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      if (!ctx.auth.orgId)
        throw new TRPCError({
          code: "UNAUTHORIZED",
          message: "No organization id found",
        });

      return ctx.db.store.create({
        data: {
          name: input.name,
          userId: ctx.auth.userId,
          organizationId: ctx.auth.orgId,
        },
      });
    }),
});
