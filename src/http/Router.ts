import { Request, Response, Router } from "express";
import { UserController } from "../user/UserController";
export class AppRouter {

    private loggerMiddleware: any;

    constructor({ loggerMiddleware }) {
        this.loggerMiddleware = loggerMiddleware;
    }

    public getRouter(): Router {
        const router = Router();
        router.use(this.loggerMiddleware);
        router.use("/users", new UserController().getRouter())
        router.get("/", (req: Request, res: Response) => {
            res.send("Hello world");
        });
        return router;
    }
}
