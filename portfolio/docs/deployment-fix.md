# Troubleshooting: Cloudflare 502 (Historical Notes)

This issue was originally caused by Coolify exposing port **3000** while the container listens on **3300**. Current configs already set `PORT=3300`, but keep these steps in mind if a 502 appears again.

## Checklist
- Coolify → **Settings → Port Exposes** = `3300`
- `nixpacks.toml` defines `PORT = '3300'`
- `next start` logs `ready on 0.0.0.0:3300`
- `curl 127.0.0.1:3300 -I` inside the container returns `200`
- Cloudflare proxy is enabled with SSL mode `Full` or `Full (strict)`

## Diagnostic Commands
```bash
# inside container
env | grep PORT
curl 127.0.0.1:3300 -I
netstat -tlnp | grep 3300

# host
docker logs <container_id> --tail 100
```

If the port mapping looks correct but the site still returns 502, check the Traefik dashboard in Coolify and confirm the route is healthy.
