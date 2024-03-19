import { Elysia } from "elysia";
import {pluginGracefulServer} from "./graceful-server";
import {gql} from "./gql";
import {file} from "./file";
import {swagger} from '@elysiajs/swagger'
import {cors} from '@elysiajs/cors'

function getRandomNumber(min: number,max: number) {
  return Math.floor(Math.random()*(max-min)+min);
}

const app=new Elysia()
  .use(swagger()).use(pluginGracefulServer)
  .use(cors()).use(gql).use(file).get("/",() => "Hello Elysia").get("/rolldice",() => getRandomNumber(1,6).toString()).listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
