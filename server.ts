import {fastify} from "fastify";
import {interpret} from 'xstate';
import promiseMachine from "./machine"

const server = fastify()


const service = interpret(promiseMachine);

service.start();

server.get('/ping', async (request, reply) => {
  
  service.send({
    type: 'NEXT'
  })
  
  return service.getSnapshot().value;
})

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})