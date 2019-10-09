import { Response, Request, Router} from "express";

export class UserController {
    private router = Router();

    constructor() {
        this.router.get("/", this.index);
    }

    private index(req: Request, res: Response) {
        res.send("user index is not implemented");
    }

    public getRouter() {
        return this.router
    }
}
