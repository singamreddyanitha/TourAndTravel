import React, { useState } from "react";
import CommonSection from "../shared/CommonSection";
import { Container, Row, Col, Button } from "reactstrap";

import { Link, useLocation } from "react-router-dom";

import TourCard from "../shared/TourCard.jsx";
import NewsLetter from "../shared/Newsletter.jsx";

const SearchResultsList = () => {
  const location = useLocation();
  const [data] = useState(location.state);

  // console.log(data);

  return (
    <>
      <CommonSection title={"Tour Search Result"} />
      <section>
        <Container>
          <Row>
            {data.length === 0 ? (
              <>
              <Col className="text-center">
              <h4>No tours found</h4>
              {/* <h1 className="text-center mt-3"><Link to ="/tours">Back</Link></h1> */}
              <Button className="btn primary__btn w-25 mt-3">
                <Link to="/tours">Back to tours</Link>
              </Button>
              </Col>
              </>
            ) : (
              data?.map((tour) => (
                <Col lg="3" className="mb-4" key={tour._id}> 
                  <TourCard tour={tour} />
                </Col>
              ))
            )}
          </Row>
        </Container>
      </section>
      <NewsLetter />
    </>
  );
};

export default SearchResultsList;
