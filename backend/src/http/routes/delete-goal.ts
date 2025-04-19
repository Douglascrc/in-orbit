import z from 'zod';
import { deleteGoal } from '../../features/delete-goal';
import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';

export const deleteGoalRoute:FastifyPluginAsyncZod = async (server) => {

  server.delete('/delete', {
    schema: {
      body: z.object({
        id: z.string()
      })
    },
    handler: async (request, reply) => {
      const { id: goalId } = request.body;
      try {
        await deleteGoal({goalId});
        reply.send({ success: true });
      } catch(error) {
        console.error(error);
        reply.status(500).send({error:'Ocorreu um erro ao tentar deletar a meta'});
      }
    }
  });

};
