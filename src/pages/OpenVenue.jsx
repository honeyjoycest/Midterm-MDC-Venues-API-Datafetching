import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Logo from '../assets/logo.png'

const OpenVenue = () => {
  const { id } = useParams();
  const [venue, setVenue] = useState({});
  const [schedule, setSchedule] = useState({});

  useEffect(() => {
    fetch(`https://sis.materdeicollege.com/api/venues/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const { venue } = data;
        setVenue(venue);
        setSchedule(data.schedules);
      })
  }, []);

  return (

    <div className="venue col-md-12 mt-3">
      <div className="container" >
        <h1 className="title_2"> <img src={Logo} alt=""/> Mater Dei College {venue.building}</h1>
        <div className="d-flex justify-content-start">
        </div>

        <div className="d-flex justify-content-center mb-1">
          <div className="col-md-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Building</th>
                  <th scope="col">Capacity</th>
                </tr>
              </thead>
              <tbody className="bg-primary text-light">
                <tr>
                  <td>{venue.name}</td>
                  <td>{venue.building}</td>
                  <td>{venue.capacity}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <p className="id"> ID: {id}</p>

        <div className="second_t d-flex justify-content-end">
          <div className="col-md-12">
            <div className="container bg-light shadow-md ">
              <div className="card-header text-white">

              </div>
              <div className="card-body shadow-lg">
                <table className="table table-borderless">
                  <thead className="head_2 text-white shadow-lg">
                    <tr>
                    <td class="table-active">ID</td>
                    <td class="table-primary">Course No</td>
                    <td class="table-secondary">Description</td>
                    <td class="table-success">Schedule</td>
                    <td class="table-danger">Size</td>
                    <td class="table-warning">Teacher</td>
                    </tr>
                  </thead>

                  <tbody className="text-light">
                    {Object.keys(schedule)?.map((sched, index) => {
                      return (
                        <tr key={index}>
                         <td class="table-active">{schedule[sched].id}</td>
                          <td class="table-primary">{schedule[sched].course_no}</td>
                          <td class="table-secondary">{schedule[sched].description}</td>
                          <td class="table-success">{schedule[sched].schedule}</td>
                          <td class="table-danger">{schedule[sched].size}</td>
                          <td class="table-warning">{schedule[sched].teacher}</td>
                        </tr>
                      );
                    })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default OpenVenue;