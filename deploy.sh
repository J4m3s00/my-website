#! /usr/bin/bash

git checkout master
git pull


cd front-end

npm install
npm run build

cd ..
rustup default stable
cargo build --release
sudo ./target/release/my-website