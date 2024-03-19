
import "reflect-metadata";
import {yoga} from '@elysiajs/graphql-yoga'
import {Authorized, Field, ObjectType, Query, Resolver, buildSchema, buildTypeDefsAndResolvers} from 'type-graphql';

@ObjectType()
class User {
  @Field(() => String, {
    nullable: false
  })
  test!: string;
}

@Resolver(() => User)
export class testResolver {
  @Query(() => String)
  async test(): Promise<String> {
    return 'hello world';
  }
}

const schema=await buildTypeDefsAndResolvers({
  resolvers: [
    testResolver,
  ],
});

export const gql=yoga({...schema});