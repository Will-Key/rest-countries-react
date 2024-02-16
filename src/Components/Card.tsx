export default function Card() {
  return (
    <div className="bg-white w-full shadow-lg transition-transform duration-300 transform hover:scale-110">
      <div className="w-full">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAACWCAMAAAAfSh8xAAAACVBMVEX3fwD///8AnmBWUWjSAAAAoUlEQVR4nO3PMQEAAAgDoGn/0IZwJzQg6Zme7SkGDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDR8OvdOD1wQ8tBkAAAAASUVORK5CYII="
          width={'100%'}
          alt=""
          className="rounded-t-lg border-2"
        />
      </div>
      <div className="my-4 px-4">
        <p>
          Pays: <span className="font-bold text-lg">Côte d'Ivoire</span>
        </p>
        <p>
          Capital: <span className="font-bold text-lg">Yamoussoukro</span>
        </p>
        <p>
          Population: <span className="font-bold text-lg">28.000.000</span>
        </p>
      </div>
    </div>
  )
}
