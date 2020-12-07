import React, { Component } from "react";
import { Container, Row, CardColumns, Badge } from "reactstrap";
import TourCard from "./TourCard";
import "../App.css";
import axios from "../axios/axios";

const itemCategories = [
  "all",
  "Beach",
  "Mountain",
  "Resort",
  "Climbing",
  "Camping",
  "Honeymoon"
];

class Package extends Component {
  state = {
    cards: [],
    packageType: "all"
  };

  componentDidMount() {
    axios.get('http://localhost:5000/api/tourpackage').then(res=>{
      console.log(res.data.data)
      this.setState({ cards: res.data.data });
    }).catch((error)=>{
      console.log(error)
    })
   
  }

  render() {
    const { cards, packageType } = this.state;
    return (
      <div className="subComponent-lg" id="packageBody">
        <Container>
          <header className="headerTitle text-center">
            <h1>Tour Packages</h1>
            <p>A Great Collection of Our Tour Packages</p>
          </header>
          <section className="packageBody text-center">
            {itemCategories.map((badge, index) => (
              <Badge
                key={index}
                href=""
                color={badge === packageType ? "dark" : "light"}
                onClick={() => this.setState({ packageType: badge })}
              >
                {badge}
              </Badge>
            ))}

            <Row className="text-left">
              <CardColumns>
                {packageType !== "all"
                  ? cards.map(tourcard => {
                      return tourcard.packageType === packageType ? (
                        <TourCard key={tourcard.id} tourcard={tourcard} />
                      ) : null;
                  })
                  : cards.map(tourcard => (
                    <TourCard key={tourcard.id} tourcard={tourcard} />
                  ))}
              </CardColumns>
            </Row>
          </section>
        </Container>
      </div>
    );
  }
}

export default Package;
