import { Request, Response, Router } from "express";

export class AppRouter {
    public getRouter(): Router {
        const router = Router();
        router.get("/", (req: Request, res: Response) => {
            res.send("Hello world");
        });
        return router;
    }
}
