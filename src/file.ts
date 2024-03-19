import {Elysia, t} from "elysia";

export const file=new Elysia().post('/file',({body: {image}}) => {
  console.log(image);
},{
  body: t.Object({
    image: t.File()
  })
});