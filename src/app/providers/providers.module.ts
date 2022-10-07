import { NgModule } from '@angular/core';

import { ApiProvider } from './api';
import { NotyService } from './noty';
import { TokenService } from './token';
import { LocalStorageService } from './localStorage';
import { DefaultLoaderService } from './defaultLoader';

export { ApiProvider } from './api'
export { NotyService } from './noty';
export { TokenService } from './token';
export { LocalStorageService } from './localStorage';
export { DefaultLoaderService} from './defaultLoader';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    ApiProvider,
    NotyService,
    TokenService,
    LocalStorageService,
    DefaultLoaderService
  ]
})
export class ProvidersModule { }
