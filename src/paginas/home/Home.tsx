import "./Home.css";

function Home() {
  return (
    <>
      <div className="bg-red-800 flex justify-center">
        <div className="container grid grid-cols-2 text-white">
          <div className="flex flex-col gap-4 items-center justify-center py-4">
            <h2 className="text-5xl font-bold">Seja bem vinde!</h2>
            <p className="text-xl">A Farmácia aque tem tudo perto de você!</p>

            <div className="flex justify-around gap-4">
              
            </div>
          </div>

          <div className="flex justify-center ">
            <img
              src="https://d32exhd5j7o0z1.cloudfront.net/variants/jweeS5JwKkumzZ8vtURe3K6D/b6ddb1640e40bdd68db56d48e7164c4813c0819bad11420b1fe7db253f4a5ce3"
              alt=""
              className="w-2/3"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
//https://smarket.com.br/wp-content/uploads/2018/08/FARMACIA-1.jpg
