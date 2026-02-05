type TocItem = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  if (!items.length) return null;

  return (
    <nav className="text-sm">
      <p className="text-secondary-200 mb-3 leading-tight font-semibold tracking-wide uppercase">
        In This Article
      </p>
      <ul className="mb-4">
        {items.map((item) => (
          <li
            key={item.id}
            className={
              item.level === 3
                ? "border-secondary-200/30 hover:border-secondary-200 ml-2 border-l-4 pb-2 pl-2 transition-colors"
                : "pb-2"
            }
          >
            <a
              href={`#${item.id}`}
              className="hover:text-secondary-200 text-slate-400 transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
