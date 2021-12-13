import {Request, Response} from 'express';

import { ImportCategoryUseCase } from "./ImportCategoryUseCase";



class ImportCategoryController{
    constructor(private importCategotyUseCase: ImportCategoryUseCase){}
    handle(request: Request, response: Response):Response{
        const {file} = request;
        this.importCategotyUseCase.execute(file);
        return response.send();
    }

}
export {ImportCategoryController};