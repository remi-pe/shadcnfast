interface ColorSwatchProps {
  name: string;
  variable: string;
}

export function ColorSwatch({ name, variable }: ColorSwatchProps) {
  return (
    <div className="flex items-center gap-3 rounded-md border p-3">
      <div
        className="h-10 w-10 shrink-0 rounded-md border"
        style={{ backgroundColor: `var(--${variable})` }}
      />
      <div className="min-w-0">
        <p className="text-sm font-medium">{name}</p>
        <p className="truncate font-mono text-xs text-muted-foreground">
          --{variable}
        </p>
      </div>
    </div>
  );
}
