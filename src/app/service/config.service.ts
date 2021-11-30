import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // private _storage: Storage | null = null;
  constructor(private storage: Storage) { 
    this.init();
  }

  async init(){
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
     await this.storage.create();
  }

  public set(key: string, value: any) {
    this.storage.set(key, value);
  }

  public get(key: string) {
    const token =  this.storage.get(key);
    console.log(token);
    return token;
  }
}
