import { action, makeAutoObservable } from "mobx";
import { makePersistable } from "mobx-persist-store";
import { categoriesApi } from "../api/categoryApi";

class CategoryStore {
  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: "CategoryStore",
      properties: ["categories"],
      storage: window.localStorage,
    });
  }

  categories: { id: number; name: string }[] = [];

  @action
  async getCategory() {
    console.log("fetch chuyen muc");

    const res = await categoriesApi.findAll();
    //@ts-ignore
    this.categories = res.genres;
  }

  generateCateList(ids: number[]) {
    const nameArr = ids?.map((id) => this.getCateName(id));
    return nameArr?.join(", ");
  }

  getCateName(id: number) {
    return this.categories.find((e) => e.id == id)?.name;
  }
}

export const categoryStore = new CategoryStore();
