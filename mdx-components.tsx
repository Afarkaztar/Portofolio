import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: (props) => <h2 className="mt-10 mb-4 text-xl font-bold text-text-primary" {...props} />,
    h3: (props) => <h3 className="mt-8 mb-3 text-lg font-semibold text-text-primary" {...props} />,
    p: (props) => <p className="mb-4 leading-relaxed text-text-secondary" {...props} />,
    ul: (props) => <ul className="mb-4 list-disc space-y-2 pl-6 text-text-secondary" {...props} />,
    ol: (props) => <ol className="mb-4 list-decimal space-y-2 pl-6 text-text-secondary" {...props} />,
    li: (props) => <li className="leading-relaxed" {...props} />,
    a: (props) => <a className="text-accent underline underline-offset-4" {...props} />,
    code: (props) => (
      <code className="rounded bg-surface px-1.5 py-0.5 font-mono text-sm text-text-primary" {...props} />
    ),
    pre: (props) => (
      <pre
        className="mb-4 overflow-x-auto rounded-card border border-border bg-background-secondary p-4 font-mono text-sm"
        {...props}
      />
    ),
    blockquote: (props) => (
      <blockquote className="mb-4 border-l-2 border-accent pl-4 italic text-text-secondary" {...props} />
    ),
    ...components,
  };
}
