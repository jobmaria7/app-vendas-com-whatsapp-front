import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.jobmaria.whatsappclone',
  appName: 'Whatsapp Clone',
  webDir: 'dist/whatsaap-clone-front/browser',
  server:{
    androidScheme: 'https'
  }
};

export default config;
