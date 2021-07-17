import ShelfRepo from "./shelf.repo";
import { IShelf } from "./shelf.types";

const createShelf = (shelf: IShelf) => ShelfRepo.createShelf(shelf)

const getShelf = () => ShelfRepo.getShelf();

const getShelfByName = (name: string) => ShelfRepo.getShelfByName(name);

const updateShelf = (shelf: IShelf) => ShelfRepo.updateShelf(shelf);

const deleteShelf = (id: string) => ShelfRepo.deleteShelf(id)

export default {
    createShelf,
    getShelf,
    getShelfByName,
    updateShelf,
    deleteShelf
}