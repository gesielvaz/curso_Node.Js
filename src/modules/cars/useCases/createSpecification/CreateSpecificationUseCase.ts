import { ISpecificationsRepository } from "../../repositories/ISpecificatiosRepository";

interface IRequest{
    name: string;
    description: string;
}


class CreateSpecificationUseCase{
       constructor(private specificationsRepository: ISpecificationsRepository){}

    execute({description, name}:IRequest):void{
        const specificationAlreadyExists = this.specificationsRepository.findByName(name);
        if(specificationAlreadyExists){
            throw new Error("Specifications already exists!")
        }
        this.specificationsRepository.create({
            name,
            description,
        });
    }

}
export {CreateSpecificationUseCase};

