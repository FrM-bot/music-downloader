require('esbuild').build({
    entryPoints: ['client/src/main.tsx'],
    bundle: true,
    outfile: 'public/bundle.js',
    minify: true,
    watch: true
  }).catch(() => process.exit(1))