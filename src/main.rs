use tower_http::services::{ServeDir, ServeFile};

const HTTP_ADDRESS: &'static str = "0.0.0.0:8000";

#[tokio::main]
async fn main() {
    tracing_subscriber::fmt()
        .with_max_level(tracing::Level::DEBUG)
        .init();

    let app = axum::Router::new()
        .route_service("/", ServeFile::new("public/index.html"))
        .fallback_service(ServeDir::new("public/"))
        .nest_service("/assets", ServeDir::new("assets/"))
        .layer(tower_http::trace::TraceLayer::new_for_http());

    println!("Listening at {}", HTTP_ADDRESS);
    let listener = tokio::net::TcpListener::bind(HTTP_ADDRESS)
        .await
        .expect("unable to bind address.");

    axum::serve(listener, app).await.expect("can't start app.");
}
