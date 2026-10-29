import { Fragment, type ElementType, type ReactNode } from "react";

type Line = string | { text: string; className?: string };

interface SplitTextProps {
  as?: ElementType;
  lines: Line[];
  className?: string;
  id?: string;
  style?: React.CSSProperties;
  /** Extra delay in ms before the first word starts. */
  delay?: number;
  /** Play on page load (pure CSS, for above-the-fold headings) instead of on scroll. */
  intro?: boolean;
}

/**
 * Heading whose words slide up from a mask, line by line, when it scrolls
 * into view. The markup is identical on the server and client (no hydration
 * mismatch) and reads as ordinary text to screen readers and crawlers.
 * A line's className (e.g. gradient text) goes on each word, because
 * background-clip:text does not reach transformed descendants.
 */
export function SplitText({ as: Tag = "h2", lines, className, id, style, delay = 0, intro = false }: SplitTextProps) {
  let index = 0;
  const content: ReactNode[] = lines.map((line, li) => {
    const { text, className: lineClass } = typeof line === "string" ? { text: line, className: undefined } : line;
    const words = text.split(" ");
    return (
      <Fragment key={li}>
        {li > 0 && <br />}
        <span>
          {words.map((word, wi) => {
            const i = index++;
            return (
              <Fragment key={wi}>
                <span className="split-mask">
                  <span className={lineClass ? `split-word ${lineClass}` : "split-word"} style={{ "--i": i, "--d": `${delay}ms` } as React.CSSProperties}>{word}</span>
                </span>
                {wi < words.length - 1 && " "}
              </Fragment>
            );
          })}
        </span>
      </Fragment>
    );
  });
  if (intro) return <Tag id={id} className={className ? `split-intro ${className}` : "split-intro"} style={style}>{content}</Tag>;
  return <Tag id={id} className={className} style={style} data-reveal="split">{content}</Tag>;
}
