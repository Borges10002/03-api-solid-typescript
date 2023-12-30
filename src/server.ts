import { app } from "./app";
import { env } from "./env";

const port = env.PORT;
const host = "192.168.3.10";

app.listen({ host, port }).then(() => {
  console.log(`🚀 HTTP Server Running - ${port}`);
});
