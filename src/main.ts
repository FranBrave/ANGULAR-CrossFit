import { initializeApp } from 'firebase/app';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

const firebaseConfig = environment.firebaseConfig;

// Inicializar la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Otro código de inicialización de Angular

// Luego, inicia la aplicación Angular
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));