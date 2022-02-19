import { Bson, MongoClient } from "https://deno.land/x/mongo/mod.ts";

// Setup mongodb connection
const connect = async () => {
  const client = new MongoClient();

  // Connecting to a Mongo Atlas Database
  await client.connect({
    db: "<db_name>",
    tls: true,
    servers: [
      {
        host: "<db_cluster_url>",
        port: 27017
      }
    ],
    credential: {
      username: "<username>",
      password: "<password>",
      db: "<db_name>",
      mechanism: "SCRAM-SHA-1"
    }
  });

  return client;
};

// Schema interface
interface PostsSchema {
  _id: Bson.ObjectId;
  post_title: string;
  post_desc: string;
  is_promoted: boolean;
}

// Insertion
const insertPost = async (args: any) => {
  const client = await connect();

  const db = client.database("test");
  const posts = db.collection<PostsSchema>("Posts");
  const insertId = await posts.insertOne({
    post_title: args.postTitle,
    post_desc: args.postDesc,
    is_promoted: args.isPromoted
  });

  return posts.findOne({ _id: insertId }, { noCursorTimeout: false });
};

// Query
const allPosts = async () => {
  const client = await connect();

  const db = client.database("test");
  const posts = db.collection<PostsSchema>("Posts");

  return await posts.find({}, { noCursorTimeout: false }).toArray();
};

export const resolvers = {
  Query: { health: () => `Health Check: Ok!`, allPosts: () => allPosts() },
  Mutation: {
    insertPost: (_: any, args: any) => insertPost(args)
  }
};
