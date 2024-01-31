declare module "@fastify/jwt" {
  export interface FastifyJWT {
    user: {
      sub: string;
    };
  }
}
