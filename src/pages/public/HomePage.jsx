import React from "react";
import "./HomePage.css";
import { Avatar, Typography } from "@mui/material";
import { Container, Row } from "react-bootstrap";
import { DiningSharp, Payment } from "@mui/icons-material";

export default function HomePage() {
  return (
    <div>
      <div className="mb-4">
        <div className="d-flex justify-content-center">
          <div className="d-none d-lg-block">
            <Typography color="GrayText" variant="h1" fontFamily={"Pacifico"}>
              J Tables
            </Typography>
            <Typography fontFamily={"Pacifico"} color="GrayText" variant="h5">
              ...restuarants just got smarter
            </Typography>
          </div>
          <div className="d-none d-md-block d-lg-none">
            <Typography color="GrayText" variant="h2" fontFamily={"Pacifico"}>
              J Tables
            </Typography>
          </div>
          <div className="d-sm-block d-md-none">
            <Typography
              textAlign={"center"}
              color="GrayText"
              variant="h4"
              fontFamily={"Pacifico"}
            >
              J Tables
            </Typography>
            <Typography
              textAlign={"center"}
              fontFamily={"Pacifico"}
              color="GrayText"
              variant="body1"
            >
              ...restuarants just got smarter
            </Typography>
          </div>
        </div>
      </div>
      <header className="homeBanner text-white d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <div className="col-md-4">
              <div className="mb-3 d-flex justify-content-center">
                <Avatar sx={{ height: 100, width: 100 }}>
                  <DiningSharp sx={{ height: 60, width: 60 }} />
                </Avatar>
              </div>
              <div className="mb-2">
                <Typography variant="h5" fontFamily={"Roboto"}>
                  EASY RESTUARANT MANAGEMENT
                </Typography>
              </div>
              <div>
                <Typography fontFamily={"Roboto"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis architecto non labore exercitationem quae, temporibus
                  omnis fuga doloremque, odit, voluptate tenetur ex quia
                  reprehenderit iure libero maiores quisquam! Maiores, vitae?
                </Typography>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3 d-flex justify-content-center">
                <Avatar sx={{ height: 100, width: 100 }}>
                  <Payment sx={{ height: 60, width: 60 }} />
                </Avatar>
              </div>
              <div className="mb-2">
                <Typography variant="h5" fontFamily={"Roboto"}>
                  SEAMLESS TRANSACTION
                </Typography>
              </div>
              <div>
                <Typography fontFamily={"Roboto"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam illum minus rerum doloremque nam optio quidem voluptas
                  sint magni omnis alias eligendi natus perferendis libero
                  soluta quo, explicabo ratione obcaecati.
                </Typography>
              </div>
            </div>
            <div className="col-md-4">
              <div className="mb-3 d-flex justify-content-center">
                <Avatar sx={{ height: 100, width: 100 }}>
                  <Typography fontSize={35}>
                    <i class="fas fa-truck    "></i>
                  </Typography>
                </Avatar>
              </div>
              <div className="mb-2">
                <Typography variant="h5" fontFamily={"Roboto"}>
                  EFFICIENT DELIVERY
                </Typography>
              </div>
              <div>
                <Typography fontFamily={"Roboto"}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Ipsam illum minus rerum doloremque nam optio quidem voluptas
                  sint magni omnis alias eligendi natus perferendis libero
                  soluta quo, explicabo ratione obcaecati.
                </Typography>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </div>
  );
}
