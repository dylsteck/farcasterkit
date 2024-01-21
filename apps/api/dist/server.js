"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = require("body-parser");
const controller_1 = require("./modules/casts/controller");
const controller_2 = require("./modules/users/controller");
const warpcastChannels_1 = require("./utils/warpcastChannels");
const posthog_node_1 = require("posthog-node");
const controller_3 = require("modules/neynar/controller");
const posthog = new posthog_node_1.PostHog(process.env.POSTHOG_API_KEY, { host: 'https://app.posthog.com' });
const createServer = () => {
    const app = (0, express_1.default)();
    app.disable("x-powered-by")
        .use((0, morgan_1.default)("dev"))
        .use((0, body_parser_1.urlencoded)({ extended: true }))
        .use((0, body_parser_1.json)())
        .use((0, cors_1.default)());
    app.use((req, res, next) => {
        if (req.originalUrl === '/sw.js') {
            return next();
        }
        // Logging solely to prevent improper API usage
        const userIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
        posthog.capture({
            distinctId: userIp,
            event: 'route_visited',
            properties: {
                route: req.originalUrl,
                method: req.method
            }
        });
        next();
    });
    app.use('/casts', controller_1.CastsRouter)
        .use('/users', controller_2.UsersRouter)
        .use('/neynar', controller_3.NeynarRouter)
        .get("/utils/warpcastChannels", (req, res) => {
        return res.json({ channels: warpcastChannels_1.warpcastChannels });
    });
    process.on('SIGINT', () => {
        posthog.flush();
        process.exit();
    });
    return app;
};
exports.createServer = createServer;
//# sourceMappingURL=server.js.map