declare global {
  namespace NodeJS {
    interface ProcessEnv {


      NEO4J_URI: string;
      NEO4J_USERNAME: string;
      NEO4J_PASSWORD: string;

      AWS_ACCESS_KEY_ID: string;
      AWS_SECRET_ACCESS_KEY: string;
      AWS_DEFAULT_REGION: string;

      AWS_S3_IMAGE_BUCKET: string;

      NEXTAUTH_SECRET: string;

      // Public Variables
      NEXT_PUBLIC_MAPBOX_TOKEN: string;
      NEXT_PUBLIC_SERVER_PROTOCOL?: string;
      NEXT_PUBLIC_VERCEL_URL?: string;
      NEXT_PUBLIC_SERVER_URL?: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
