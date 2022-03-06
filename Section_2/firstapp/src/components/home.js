const Home = () => {
  const myname="shivangi";


  let age = 20;
  let user = {
    username: "Super User",
    email: "user@mail.com",
    password: "1234",
    
  };

  const addNums = (a, b) => {
    return a + b;
  };

  const card = () => {
    return (
      <div className="card" style={{ width: "500px" }}>
        <img
          className="card-img-top"
          src="https://images.pushsquare.com/4510c3977a7af/spyro-reignited-trilogy-how-to-switch-to-original-soundtrack-guide-ps4-playstation-4.large.jpg"
        />
        <div className="card-body">
          <h1>Spyro</h1>
        </div>
      </div>
    );
  };

  const mybutton = (
    <button className="btn btn-outline-dark">Generated from a Variable</button>
  );

  return (
    <div>
      <h1>Home Component</h1>
      <h1>{myname}</h1>
      <img src="logo512.png" alt=""/>
      
      
      <h2>Age : {age}</h2>

      <h4>Username : {user.username} </h4>
      <h5> 2 + 2 is {addNums(2, 2)}</h5>
      <button className="btn btn-primary">Hello There</button>
      {mybutton}
      {card()}
      
      {card()}


      


      
    </div>
  );
};
export default Home;
