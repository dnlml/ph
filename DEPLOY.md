# Deploy Guide - danielemeli.xyz

## Perché build locale?

Questo progetto usa `@zerodevx/svelte-img` che processa 68 immagini (~250MB) durante il build, generando varianti ottimizzate (webp, avif, multiple dimensioni). Questo processo richiede ~10-15 minuti e molta RAM, quindi **buildiamo in locale** e deployiamo solo gli artefatti.

## Requisiti

- Node.js 22+
- pnpm
- Accesso SSH al VPS: `ssh dnlml@51.178.44.81 -p 29`

## Deploy Steps

### 1. Build locale

```bash
cd ~/dev/personali/ph
pnpm install
pnpm build
```

### 2. Sync files al VPS

```bash
rsync -avz --delete \
  -e "ssh -p 29" \
  --exclude='.git' \
  --exclude='src' \
  --exclude='.svelte-kit' \
  --exclude='*.md' \
  build node_modules package.json Dockerfile docker-compose.yml \
  dnlml@51.178.44.81:~/sites/ph/
```

### 3. Riavvia container sul VPS

```bash
ssh dnlml@51.178.44.81 -p 29 "cd ~/sites/ph && docker compose up -d --build"
```

## One-liner per deploy rapido

```bash
pnpm build && \
rsync -avz -e "ssh -p 29" \
  build node_modules package.json Dockerfile docker-compose.yml \
  dnlml@51.178.44.81:~/sites/ph/ && \
ssh dnlml@51.178.44.81 -p 29 "cd ~/sites/ph && docker compose up -d --build"
```

## Struttura VPS

```
~/sites/ph/
├── build/           # App buildata (da rsync)
├── node_modules/    # Dependencies (da rsync)
├── package.json     # (da rsync)
├── Dockerfile       # (da rsync)
└── docker-compose.yml
```

## Configurazione Caddy

Il dominio è configurato in `~/caddy/Caddyfile`:

```
danielemeli.xyz, www.danielemeli.xyz {
    reverse_proxy danielemeli-photo:3000
}
```

Per ricaricare Caddy dopo modifiche:

```bash
docker exec caddy caddy reload --config /etc/caddy/Caddyfile
```

## DNS (OVH)

- **A record**: `danielemeli.xyz` → `51.178.44.81`
- **A record**: `www.danielemeli.xyz` → `51.178.44.81`

## Troubleshooting

### Vedere i log del container

```bash
ssh dnlml@51.178.44.81 -p 29 "cd ~/sites/ph && docker compose logs -f"
```

### Riavviare il container

```bash
ssh dnlml@51.178.44.81 -p 29 "cd ~/sites/ph && docker compose restart"
```

### Rebuild completo

```bash
ssh dnlml@51.178.44.81 -p 29 "cd ~/sites/ph && docker compose down && docker compose up -d --build"
```
