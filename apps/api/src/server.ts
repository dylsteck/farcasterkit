import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import { CastsRouter } from "./modules/casts/controller";
import { UsersRouter } from "./modules/users/controller";
import { warpcastChannels } from "./utils/warpcastChannels";
import { PostHog } from 'posthog-node';
import { NeynarRouter } from "modules/neynar/controller";

const posthog = new PostHog(process.env.POSTHOG_API_KEY as string, { host: 'https://app.posthog.com' });

export const createServer = () => {
  const app = express();

  app.disable("x-powered-by")
     .use(morgan("dev"))
     .use(urlencoded({ extended: true }))
     .use(json())
     .use(cors());

  app.use((req: Request, res: Response, next: NextFunction) => {
    if (req.originalUrl === '/sw.js') {
      return next();
    }
    // Logging solely to prevent improper API usage
    const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    posthog.capture({
      distinctId: userIp as string,
      event: 'route_visited',
      properties: {
        route: req.originalUrl,
        method: req.method
      }
    });
    next();
  });
  app.use('/casts', CastsRouter)
     .use('/users', UsersRouter)
     .use('/neynar', NeynarRouter)
     .get("/utils/warpcastChannels", (req: Request, res: Response) => {
       return res.json({ channels: warpcastChannels });
     });
  process.on('SIGINT', () => {
    posthog.flush();
    process.exit();
  });
  return app;
};