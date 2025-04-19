import fastify from 'fastify';
import { serializerCompiler, validatorCompiler, type ZodTypeProvider } from 'fastify-type-provider-zod';
import { getWeekPendingGoalsRoute } from './routes/get-week-pending-goals';
import { createGoalCompletionRoute } from './routes/create-goal-completion';
import { createGoalRoute } from './routes/create-goal';
import { getWeekSummaryRoute } from './routes/get-week-summary';
import cors from '@fastify/cors';
import { deleteGoalRoute } from './routes/delete-goal';


export const server = fastify().withTypeProvider<ZodTypeProvider>();

server.register(cors, {
  origin:'*',
});

// Add schema validator and serializer
server.setValidatorCompiler(validatorCompiler);
server.setSerializerCompiler(serializerCompiler);

server.register(getWeekPendingGoalsRoute);
server.register(getWeekSummaryRoute);
server.register(createGoalRoute);
server.register(createGoalCompletionRoute);
server.register(deleteGoalRoute);

server.listen({
  port: 3333,
}).then(() => {
  console.log('HTTP server is running!');
});