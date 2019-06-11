const dev = {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-6lw5huob381q"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://api-dev.theyucheng.com"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_NkaaHXyIA",
    APP_CLIENT_ID: "7kgmb32lec7brt18pmv7cacdko",
    IDENTITY_POOL_ID: "ap-southeast-2:d022a4aa-f427-413c-aecf-3552dbeb2765"
  },
  stripe: {
    STRIP_KEY: 'pk_test_3osQpDNtVABTjri6pa57eHLt006r1m3VCD'
  }
};

const prod = {
  s3: {
    REGION: "ap-southeast-2",
    BUCKET: "notes-app-2-api-dev-serverlessdeploymentbucket-6lw5huob381q"
  },
  apiGateway: {
    REGION: "ap-southeast-2",
    URL: "https://api.theyucheng.com"
  },
  cognito: {
    REGION: "ap-southeast-2",
    USER_POOL_ID: "ap-southeast-2_NkaaHXyIA",
    APP_CLIENT_ID: "7kgmb32lec7brt18pmv7cacdko",
    IDENTITY_POOL_ID: "ap-southeast-2:d022a4aa-f427-413c-aecf-3552dbeb2765"
  },
  stripe: {
    STRIP_KEY: 'pk_test_3osQpDNtVABTjri6pa57eHLt006r1m3VCD'
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod'
  ? prod
  : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};

