import Image from "next/image";

const Categories = () => {
  return (
    <section className="py-24 px-20">
      <div className="mb-20">
        <h2 className="text-mainBlack text-3xl font-semibold font-main">
          Con materiales que se adecuen a lo que quieras
        </h2>
      </div>
      <div className="grid gap-x-16 gap-y-12 items-center grid-cols-2 ">
        <div>
          <span className="text-7xl text-gray-300 font-bold ">01</span>
          <h3 className="text-gray-800 text-xl font-bold font-main my-4">
            Tazas de porcelana
          </h3>
          <p className="text-regular tracking-wider">
            Ad eiusmod eiusmod irure sit amet amet. Sunt et voluptate ea do
            dolore reprehenderit non. Cillum amet sit dolore anim nulla tempor
            consectetur enim nulla reprehenderit est consequat. Cillum non
            cillum et aliqua duis incididunt.
          </p>
        </div>
        <div className="relative w-full h-96">
          <Image
            src="/cups/showcase.jpeg"
            alt="cup"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-full h-96">
          <Image
            src="/cups/showcase.jpeg"
            alt="cup"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div>
          <span className="text-7xl text-gray-300 font-bold ">02</span>
          <h3 className="text-gray-800 text-xl font-bold font-main my-4">
            Tazas de porcelana
          </h3>
          <p className="text-regular tracking-wider">
            Ad eiusmod eiusmod irure sit amet amet. Sunt et voluptate ea do
            dolore reprehenderit non. Cillum amet sit dolore anim nulla tempor
            consectetur enim nulla reprehenderit est consequat. Cillum non
            cillum et aliqua duis incididunt.
          </p>
        </div>

        <div>
          <span className="text-7xl text-gray-300 font-bold ">03</span>
          <h3 className="text-gray-800 text-xl font-bold font-main my-4">
            Tazas de porcelana
          </h3>
          <p className="text-regular tracking-wider">
            Ad eiusmod eiusmod irure sit amet amet. Sunt et voluptate ea do
            dolore reprehenderit non. Cillum amet sit dolore anim nulla tempor
            consectetur enim nulla reprehenderit est consequat. Cillum non
            cillum et aliqua duis incididunt.
          </p>
        </div>
        <div className="relative w-full h-96">
          <Image
            src="/cups/showcase.jpeg"
            alt="cup"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Categories;
