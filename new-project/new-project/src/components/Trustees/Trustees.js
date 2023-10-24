import "./Trustees.css";

const Trustees = () => {
  const people = [
    {
      name: "Sonja Van Dyk",
      job: "Director",
      discription:
        "Sonja Van Dyk is the current Director of St Mary's Childrens's Home. She has been with St Mary's of 25 years and is Loved by all the Children and Staff of the Home.",
      img: "3.jpg",
    },
    {
      name: "Hilario Saka",
      job: "Assistant Director",
      discription:
        "Hilario Saka is the current Assistant Director of St Mary's Childrens's Home. He has been with St Mary's of 12 years and is a Father to all the Children of St Mary's.",
      img: "1.jpeg",
    },
    {
      name: "Thandi Moyo",
      job: "Social Worker",
      discription:
        "Thandi Moyo is the Social Worker for St Mary's Children's Home. She works directly with the Children on a day to day bases and is also a Great Mother Figure to the Children.",
      img: "2.jpg",
    },
  ];

  return (
    <>
      <div className="trustees" id="trustees">
        <div className="title-text">
            <h1>Trusteees</h1>
            <h3>The people that run St Mary's</h3>
        </div>
        <div className="people">
          {people.map((person, index) => (
            <div>
              <img src={person.img} alt={`image.${index + 1}`} width='100%' height='240px' />
              <h4>{person.name}</h4>
              <p>{person.job}</p>
              <span>{person.discription}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Trustees;
