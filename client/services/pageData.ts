import path from "path";
import fs from "fs";

class PageDataService {
  jsonFileUrl?: string;
  jsonFileLocalUri: string;

  constructor() {
    this.jsonFileUrl = process.env.PAGES_JSON_URL;
    this.jsonFileLocalUri = path.join(process.cwd(), "data/pages.json");
  }

  async pagesData() {
    // if we should request json globally
    if (this.jsonFileUrl) {
      const request = await fetch(this.jsonFileUrl);
      const pages = await request.json();
      return pages;
    }

    // else take it from local dir
    const pagesData =
      JSON.parse(fs.readFileSync(this.jsonFileLocalUri, "utf-8")) ?? [];
    return pagesData;
  }

  async getPageById(pageId: string) {
    const pagesData = await this.pagesData();
    return pagesData.find(({ id }: { id: string }) => id === pageId);
  }
}

const PageDataStorage = new PageDataService();

export default PageDataStorage;
