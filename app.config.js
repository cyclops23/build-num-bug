export default ({ config }) => {
  const cfg = ({
    ...config,
    ios: {
      ...config.ios,
      buildNumber: process.env.GITHUB_RUN_NUMBER
    },
  });
  
  console.log("Dynamic Config:", cfg);
 
  return cfg;
}
