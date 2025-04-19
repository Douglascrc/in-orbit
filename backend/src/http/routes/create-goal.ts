import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { createGoal } from '../../features/create-goal';
import z from 'zod';

export const createGoalRoute: FastifyPluginAsyncZod = async (server) => {
  server.post(
    '/goals',
    {
      schema: {
        body: z.object({
          title: z.string(),
          weeklyFrequency: z.number().int().min(1).max(7),
        }),
      },
    },
    async (request, reply) => {
      const { title, weeklyFrequency } = request.body;
      const { goal } = await createGoal({
        title,
        weeklyFrequency,
      });
      reply.code(201).send({ goal });
    }
  );
};
