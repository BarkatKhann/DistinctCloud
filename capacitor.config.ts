import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.dist_test.app',
  appName: 'distinct_cloud_test',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
