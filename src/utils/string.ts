export function formatViews(countStr: string): string {
  const count = Number(countStr);
  if (isNaN(count)) return '조회수 없음';

  if (count < 10000) return count.toLocaleString();

  if (count < 100000000) {
    const tenThousands = count / 10000;
    return `${tenThousands.toFixed(tenThousands < 10 ? 1 : 0)}만`;
  }

  const hundredMillions = count / 100000000;
  return `${hundredMillions.toFixed(hundredMillions < 10 ? 1 : 0)}억`;
}
