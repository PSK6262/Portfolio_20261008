/**
 * 배포 환경(GitHub Pages 하위 경로 등)과 로컬 환경 모두에서 정적 에셋 경로를 안전하게 해석하는 헬퍼 함수
 */
export const getAssetUrl = (url) => {
  if (!url) return '';
  if (url.startsWith('http://') || url.startsWith('https://')) return url;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = url.startsWith('/') ? url.slice(1) : url;
  return `${cleanBase}${cleanPath}`;
};
