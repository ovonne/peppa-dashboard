function getInitials(text: string): string {
  const words = text.trim().split(/\s+/);
  if (words.length === 0) return "";

  const first = words[0][0].toUpperCase();
  const last = words[words.length - 1][0].toUpperCase();

  return first + last;
}

export { getInitials };
