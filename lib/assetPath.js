export function getBasePath() {
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH;
  }

  if (process.env.GITHUB_ACTIONS === "true" && process.env.GITHUB_REPOSITORY) {
    return `/${process.env.GITHUB_REPOSITORY.split("/")[1]}`;
  }

  return "";
}

export function assetPath(path) {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${getBasePath()}${normalized}`;
}
