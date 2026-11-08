"use client";

import { Check, ChevronDown } from "lucide-react";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

type FilterDropdownProps = {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  className?: string;
  variant?: "default" | "accent";
  leadingIcon?: ReactNode;
};

export default function FilterDropdown({
  label,
  value,
  options,
  onChange,
  className = "",
  variant = "default",
  leadingIcon,
}: FilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const listboxId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const selectedIndex = Math.max(options.indexOf(value), 0);
  const [activeIndex, setActiveIndex] = useState(selectedIndex);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    optionRefs.current[activeIndex]?.focus();
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [activeIndex, open]);

  const openAt = (index: number) => {
    setActiveIndex(index);
    setOpen(true);
  };

  const close = (restoreFocus = false) => {
    setOpen(false);
    if (restoreFocus) triggerRef.current?.focus();
  };

  const handleOptionKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex: number | null = null;
    if (event.key === "ArrowDown") nextIndex = (index + 1) % options.length;
    if (event.key === "ArrowUp") nextIndex = (index - 1 + options.length) % options.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = options.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      setActiveIndex(nextIndex);
      optionRefs.current[nextIndex]?.focus();
    } else if (event.key === "Escape") {
      event.preventDefault();
      close(true);
    } else if (event.key === "Tab") {
      close();
    }
  };

  const triggerStyle =
    variant === "accent"
      ? "border-transparent bg-accent text-secondary hover:bg-accent-hover focus-visible:ring-accent/50"
      : "border-slate-200 bg-white text-slate-700 hover:border-primary/40 hover:bg-slate-50 focus-visible:ring-primary/25";

  return (
    <div ref={rootRef} className={`relative w-full ${className}`}>
      <button
        ref={triggerRef}
        type="button"
        aria-label={label}
        aria-haspopup="listbox"
        aria-controls={listboxId}
        aria-expanded={open}
        onClick={() => (open ? close() : openAt(selectedIndex))}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            openAt(selectedIndex);
          }
        }}
        className={`flex min-h-12 w-full items-center justify-between gap-3 rounded-xl border px-4 py-2.5 text-left text-sm font-semibold shadow-sm outline-none transition focus-visible:ring-4 ${triggerStyle} ${variant === "accent" ? "rounded-full" : ""}`}
      >
        <span className="flex min-w-0 items-center gap-2.5">
          {leadingIcon && <span className="shrink-0" aria-hidden="true">{leadingIcon}</span>}
          <span className="truncate">{value}</span>
        </span>
        <ChevronDown
          size={17}
          aria-hidden="true"
          className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          id={listboxId}
          aria-label={label}
          className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 max-h-72 overflow-y-auto rounded-xl border border-slate-200/80 bg-white p-1.5 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5"
        >
          {options.map((option, index) => {
            const selected = option === value;
            return (
              <button
                key={option}
                ref={(element) => { optionRefs.current[index] = element; }}
                type="button"
                role="option"
                aria-selected={selected}
                tabIndex={-1}
                onClick={() => {
                  onChange(option);
                  close(true);
                }}
                onKeyDown={(event) => handleOptionKeyDown(event, index)}
                className={`flex min-h-10 w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  selected
                    ? "bg-primary/8 font-semibold text-primary"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                <span>{option}</span>
                {selected && <Check size={16} aria-hidden="true" className="shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
