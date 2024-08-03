use std::io;
use std::net;

mod components;
mod bomb;
mod home;

#[tokio::main]
async fn main() -> io::Result<()> {
    let addr: net::SocketAddr = "0.0.0.0:3000".parse().expect("failed to parse port");

    let app = axum::Router::new()
        .nest_service("/assets", tower_http::services::ServeDir::new("assets"))
        .route("/", axum::routing::get(home::home))
        .route("/blog/what-is-a-fork-bomb", axum::routing::get(bomb::bomb));

    println!("listening at {}", &addr);
    let listener = tokio::net::TcpListener::bind(&addr).await?;

    axum::serve(listener, app).await?;

    Ok(())
}
