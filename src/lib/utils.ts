export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function formatRating(rating: number) {
  return rating.toFixed(1);
}
