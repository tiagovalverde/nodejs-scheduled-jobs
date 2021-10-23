const fs = require('fs');
const path = require("path");

export class JsonFile {
  filename: string;
  json: any;
  data: any = [];

  constructor(filename: string) {
    this.filename = filename;
    this.open();
  } 

  open() {
    try {
      this.json = fs.readFileSync(this.filePath());
      this.data = JSON.parse(this.json);
    } catch(error) {
      console.warn(`File doesnt exist: ${this.filePath()}`)
    }
  }

  filePath(): string {
    return path.resolve(__dirname, `../../data/${this.filename}`);
  }

  push(item: any) {
    this.data.push(item);
  }

  save() { 
    fs.writeFileSync(this.filePath(), JSON.stringify(this.data, null, 2), 'utf8');
  }
}