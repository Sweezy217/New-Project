import "./AboutUs.css";

const AboutUs = () => {

  return (
    <div className="about-us" id="about">
      <h1>About Us</h1>
      <div className="about">
        <div>
          <h3>Who are we?</h3>
          <p>
            St Mary's Children's Home is a registered non-profit organisation
            which has its roots in the Anglican Church. However, we provide a
            safe, secure home and therapeutic environment for children from
            families in crisis, on a completely non-discriminatory basis.
            <br />
            <br />
            Although we offer residential care, our aim is always to work
            towards the reconstruction and reunification of families wherever
            possible, and in this we co-operate with others working in related
            fields of Social Welfare.
          </p>
        </div>
        <div>
          <h3>Core Values.</h3>
          <p>
            Our core values are those of the Christian gospel – humanity;
            compassion; involvement with the poor, the needy and the broken; the
            pursuit of justice and peace; and concern for the homeless.
            <br />
            <br /> Since the establishment of the original orphanage in 1902, St
            Mary's has embraced the more modern cottage system of family units
            and adapted to meet the challenges of the present – including the
            impact of HIV/Aids on children and families, and the large-scale
            immigration to the city of Johannesburg, resulting in unemployment
            and extensive poverty in the community which, in turn, lead to abuse
            and abandonment.
          </p>
        </div>
        <div>
          <h3>Waiting List.</h3>
          <p>
            We have a waiting list of children in need of admission through the
            Children's Court and receive daily enquiries from the community
            regarding family and child issues. Efforts to extend our services
            are hampered by lack of funds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
