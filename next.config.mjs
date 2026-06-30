/** @type {import('next').NextConfig} */
function getBasePath() {
  if (process.env.BASE_PATH) {
    return process.env.BASE_PATH;
  }

  if (process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY) {
    return `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`;
  }

  return "";
}

const basePath = getBasePath();

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
