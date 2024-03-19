import {Elysia, error} from "elysia";

declare global {
  var serverIsReady: boolean;
}

export const pluginGracefulServer=new Elysia()
  .state('startedSince', Date.now())
  .get('/ready', () =>  {
    if(global.serverIsReady) {
      return {
        status: "ready"
      };
    }

    return error(500);
  })
  .get('/live', ({store: {startedSince}}) => {
    return {
      //@ts-ignore
      uptime: parseInt((Date.now() - startedSince) / 1000)
    }
  })

  export const setServerIsReady = (value = true) => {
    global.serverIsReady = value;
  }
