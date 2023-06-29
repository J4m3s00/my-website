use rocket::fs::FileServer;


#[launch]
fn rocket() -> _ {
    rocket::build().mount("/public", FileServer::from("/front-end/build"))
}