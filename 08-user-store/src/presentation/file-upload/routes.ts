import { Router } from "express";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { FileUploadController } from "./controller";

export class FileUploadRoutes {
  static get routes(): Router {
    const router = Router();
    const controller = new FileUploadController();

    // Definir las rutas
    //apli/upload/single/<user|category|product>/
    //apli/upload/multiple/<user|category|product>/
    router.post("/single/:type", controller.uploadFile);
    router.post("/multiple/:type", controller.uploadMultipleFiles);

    return router;
  }
}
