// general configuration for any environment
class Config {}

// development environment
class DevelopmentConfig extends Config {
  baseUrl = "http://localhost:8080/";
}

// production environment
class ProductionConfig extends Config {
  baseUrl = "/";
}

const appConfig =
  process.env.NODE_ENV === "development"
    ? new DevelopmentConfig()
    : new ProductionConfig();

export default appConfig;
