// require("dotenv").config();
// const Redis = require("ioredis");

// const redis = new Redis({
//   port: 16788,
//   host: "redis-16788.c295.ap-southeast-1-1.ec2.redns.redis-cloud.com", 
//   password: process.env.NEXT_PUBLIC_REDIS,
//   retryStrategy: function(times) {
//     const delay = Math.min(times * 50, 2000);
//     return delay;
//   }
// });

// redis.on('error', (err) => console.error('Redis Client Error', err));
// redis.on('connect', () => console.log('Redis Client Connected'));

// module.exports = redis;