FROM rust:1-alpine3.19
WORKDIR /app
COPY . .
RUN apk add musl-dev
RUN cargo build --release
CMD ["./target/release/portfolio"]
