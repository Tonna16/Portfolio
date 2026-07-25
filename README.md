# Tonna Agburu Portfolio

Personal portfolio foundation for Tonna Agburu, built with React, TypeScript,
Vite, Tailwind CSS, and React Router.

## Development

This workspace uses bundled Node and pnpm inside Codex. If Node is not available
globally, run pnpm through the bundled Node executable.

```powershell
$env:PATH='C:\Users\ttonn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin;' + $env:PATH
$pnpm='C:\Users\ttonn\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\node_modules\pnpm\bin\pnpm.cjs'
node $pnpm install
node $pnpm dev
```

## Resume

The resume page is wired for `public/resume.pdf`. Add that file when the final
resume is ready to enable the embedded PDF and download control.
