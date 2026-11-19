"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

export default function CopyButton({
  value,
  label,
  done,
  className,
}: {
  value: string;
  label: string;
  done: string;
  className?: string;
}) {
  // The Clipboard API is missing on insecure origins and in some in-app browsers. Checked after mount so
  // the server snapshot is false and the client re-checks after hydration; the button is simply not offered there.
  const supported = useSyncExternalStore(
    noopSubscribe,
    () => !!navigator.clipboard,
    () => false
  );
  const [copiedAt, setCopiedAt] = useState<number | null>(null);

  useEffect(() => {
    if (copiedAt === null) return;
    const id = window.setTimeout(() => setCopiedAt(null), 1800);
    return () => window.clearTimeout(id);
  }, [copiedAt]);

  if (!supported) return null;

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setCopiedAt(Date.now());
          } catch (err) {
            // Permission denied by the browser. The address stays visible as a mailto link next to the button.
            console.error("Clipboard write failed", err);
          }
        }}
      >
        {copiedAt !== null ? done : label}
      </button>
      <span role="status" className="sr-only">
        {copiedAt !== null ? done : ""}
      </span>
    </>
  );
}
