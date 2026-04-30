import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

const teams = [
const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 2, name: "Lando Norris", team: "McLaren" },

  { id: 3, name: "Charles Leclerc", team: "Ferrari" },
  { id: 4, name: "George Russell", team: "Mercedes" },
  { id: 5, name: "Sergio Pérez", team: "Red Bull Racing" },
  { id: 6, name: "Fernando Alonso", team: "Aston Martin" },
  { id: 7, name: "Carlos Sainz", team: "Ferrari" },
  { id: 8, name: "Oscar Piastri", team: "McLaren" },
  { id: 9, name: "Esteban Ocon", team: "Alpine" },
  { id: 10, name: "Pierre Gasly", team: "Alpine" },
  { id: 11, name: "Lance Stroll", team: "Aston Martin" },
  { id: 12, name: "Valtteri Bottas", team: "Alfa Romeo Racing" },
  { id: 13, name: "Zhou Guanyu", team: "Alfa Romeo Racing" },
  { id: 14, name: "Yuki Tsunoda", team: "AlphaTauri" },
  { id: 15, name: "Alexander Albon", team: "Williams" },
  { id: 16, name: "Logan Sargeant", team: "Williams" },
  { id: 17, name: "Kevin Magnussen", team: "Haas" },
  { id: 18, name: "Nico Hülkenberg", team: "Haas" }
]
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 2, name: "Lando Norris", team: "McLaren" },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

interface DriverParams {
  id: string;
}

server.get<{ Params: DriverParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver Not Found" };
    } else {
      response.type("application/json").code(200);
      return { driver };
    }
  }
);

server.listen({ port: 3333 }, () => {
  console.log("Server init");
});
