FROM rust:1-bullseye AS build
WORKDIR /app
COPY . .
RUN cargo build --release

FROM scratch
WORKDIR /portfolio
COPY --from=build /app/target/release/portfolio .
EXPOSE 3000
CMD ["./portfolio"]
