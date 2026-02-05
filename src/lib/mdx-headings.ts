export type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function extractHeadings(source: string): TocItem[] {
  const headingRegex = /^(#{2,3})\s+(.*)$/gm;
  const headings: TocItem[] = [];

  let match;
  while ((match = headingRegex.exec(source)) !== null) {
    const level = match[1].length;
    const text = match[2].trim();
    const id = text
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    headings.push({ id, text, level });
  }

  return headings;
}
