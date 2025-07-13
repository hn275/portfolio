FROM oven/bun:latest AS tailwindbuild

WORKDIR /app

COPY package.json .
COPY bun.lock .
COPY src/styles.css src/styles.css
COPY public/ public/

RUN bun install
RUN bun run tailwind:build

FROM rust:1.88-bullseye AS rustbuild

WORKDIR /app

COPY Cargo.lock .
COPY Cargo.toml .
COPY src/main.rs src/main.rs

RUN cargo build --release

FROM debian:bookworm-slim

RUN apt-get update && apt-get install -y \
    ca-certificates \
    libssl3 \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY --from=tailwindbuild /app/assets/styles.css assets/styles.css
COPY --from=rustbuild /app/target/release/portfolio /usr/bin/portfolio
COPY public/ public/

EXPOSE 8000
CMD ["portfolio"]