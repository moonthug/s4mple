declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SERVER_PROTOCOL: string;
      SERVER_URL?: string;

      NEO4J_URI: string;
      NEO4J_USERNAME: string;
      NEO4J_PASSWORD: string;

      NEXTAUTH_SECRET: string;

      // Public Variables
      NEXT_PUBLIC_MAPBOX_TOKEN: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
